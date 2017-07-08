import {Server} from "hapi";
import {expect} from 'chai';

describe('Single API routes', () => {

    let server: Server;
    describe('/singleApiSave', () => {

        describe('POST', () => {

            describe('200', () => {

                it('saves single api save request', async () => {
                    const request = {
                        "Id": 1,
                        "PropertyOne": "Property One Value",
                        "PropertyTwo": "Property Two Value",
                        "PropertyThree": "Property Three Value",
                        "PropertyFour": "Property Four Value",
                        "PropertyFive": "Property Five Value",
                    }  ;

                    server = new Server();
                    server.connection({ port: 3000, host: 'localhost' });

                    const response = await server.inject({
                                        method: 'POST',
                                        url: '/singleApiSave',
                                        payload: request,
                                    });

                    expect(response.statusCode).to.eql(200);
                });
            });
        });
    });
});