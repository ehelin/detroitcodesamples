import {Server} from "hapi";
import * as Mocha from 'mocha'
import * as Chai from 'chai';
import * as Sinon from 'sinon';
import {expect, use} from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import {registerServerSingleApiSave} from "../singleApiSaveRoutes";
import {SingleApiSaveService} from "../SingleApiSaveService";
import SinonStub = Sinon.SinonStub;
import {SingleSaveApiRequest} from "../SingleSaveApiRequest";
import {singleApiSaveJSON} from "./singleApiSaveJSON";

use(sinonChai);

describe('Single API routes', () => {

    let server: Server;
    describe('/singleApiSave', () => {

        describe('POST', () => {
            let request: any;
            let requestObject: SingleSaveApiRequest;
            let mockSingleApiSaveService: SingleApiSaveService;

            beforeEach(() => {
                //create input -------------------------------------
                request = singleApiSaveJSON;
                requestObject = SingleSaveApiRequest.fromJSON(request);
            });

            describe('200', () => {

                it('saves single api save request', async () => {
                    //setup server -------------------------------------
                    mockSingleApiSaveService = {
                        save: sinon.stub().returns(Promise.resolve(requestObject)),
                    }

                    server = new Server();
                    server.connection({ port: 3000, host: 'localhost'});

                    registerServerSingleApiSave(server, mockSingleApiSaveService);

                    //make call ----------------------------------------
                    const response = await server.inject({
                                        method: 'POST',
                                        url: '/singleApiSave',
                                        payload: request,
                                    });

                    //validate ------------------------------------------
                    expect(response.statusCode).to.eql(200);
                    expect(mockSingleApiSaveService.save).to.be.calledWith(requestObject);
                    expect(JSON.parse(response.payload)).to.eql(request);
                });
            });

            describe('500', () => {

                it('rejects in case of error', async () => {
                    //setup server -------------------------------------
                    mockSingleApiSaveService = {
                        save: sinon.stub().returns(Promise.reject(new Error('something broke'))),
                    }

                    server = new Server();
                    server.connection({ port: 3000, host: 'localhost'});

                    registerServerSingleApiSave(server, mockSingleApiSaveService);

                    //make call ----------------------------------------
                    const response = await server.inject({
                        method: 'POST',
                        url: '/singleApiSave',
                        payload: request,
                    });

                    //validate ------------------------------------------
                    expect(response.statusCode).to.eql(500);
                    expect(mockSingleApiSaveService.save).to.be.calledWith(requestObject);
                });
            });
        });
    });
});