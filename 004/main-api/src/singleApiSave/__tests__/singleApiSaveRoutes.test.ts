import {Server} from "hapi";
import * as Mocha from 'mocha'
import * as Chai from 'chai';
import * as Sinon from 'sinon';
import {expect} from 'chai';
import {registerServerSingleApiSave} from "../singleApiSaveRoutes";

describe('Single API routes', () => {

    let server: Server;
    describe('/singleApiSave', () => {

        describe('POST', () => {

            describe('200', () => {

                it('saves single api save request', async () => {
                    //create input 
                    const request = {
                        "Id": 1,
                        "PropertyOne": "Property One Value",
                        "PropertyTwo": "Property Two Value",
                        "PropertyThree": "Property Three Value",
                        "PropertyFour": "Property Four Value",
                        "PropertyFive": "Property Five Value",
                    }  ;

                    //make call
                    server = new Server();
                    server.connection({ port: 3000, host: 'localhost' });

                    registerServerSingleApiSave(server);

                    const response = await server.inject({
                                        method: 'POST',
                                        url: '/singleApiSave',
                                        payload: request,
                                    });

                    //validate
                    expect(response.statusCode).to.eql(200);
                });
            });
        });
    });
});