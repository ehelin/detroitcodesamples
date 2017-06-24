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

                //set up server ------------------------------------
                server = new Server();
                server.connection({ port: 3000, host: 'localhost'});
            });

            describe('200', () => {

                it('saves single api save request', async () => {
                    //setup server -------------------------------------
                    mockSingleApiSaveService = {
                        save: sinon.stub().returns(Promise.resolve(requestObject)),
                    }

                    //server = new Server();
                    //server.connection({ port: 3000, host: 'localhost'});

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

            describe('validation (400)', () => {

                const validate = (modifiedRequestSection: any) => async() => {
                    registerServerSingleApiSave(server, mockSingleApiSaveService);
                    let modifiedRequest = {...request, ...modifiedRequestSection};
                    const response = await server.inject({
                        method: 'POST',
                        url: '/singleApiSave',
                        payload: modifiedRequest,
                    });

                    expect(response.statusCode).to.eql(400);
                };

                it('Id is required', validate({Id: undefined}));
                it('PropertyOne is required', validate({PropertyOne: undefined}));
                it('PropertyTwo is required', validate({PropertyTwo: undefined}));
                it('PropertyThree is required', validate({PropertyThree: undefined}));
                it('PropertyFour is required', validate({PropertyFour: undefined}));

                it('Id must be a number', validate({Id: 'abc'}));
                it('Id must be positive', validate({Id: -1}));

                it('PropertyOne is a string', validate({PropertyOne: 2}));
                it('PropertyTwo is a string', validate({PropertyTwo: 2}));
                it('PropertyThree is a string', validate({PropertyThree: 2}));
                it('PropertyFour is a string', validate({PropertyFour: 2}));
                it('PropertyFive is a string', validate({PropertyFive: 2}));

            });
        });
    });
});