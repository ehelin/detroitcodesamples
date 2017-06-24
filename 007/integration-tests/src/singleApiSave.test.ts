import axios from 'axios';
import * as Mocha from 'mocha'
import * as Chai from 'chai';
import * as Sinon from 'sinon';
import {expect} from 'chai';
import {AxiosResponse} from "axios";

describe('/singleApiSave', () => {
    describe('POST', () => {
        it('saves data successfully', async () => {
            const validRequest = {
                "Id": 1,
                "PropertyOne": "Property One Value",
                "PropertyTwo": "Property Two Value",
                "PropertyThree": "Property Three Value",
                "PropertyFour": "Property Four Value",
                "PropertyFive": "Property Five Value",
            }  ;

            const response: any = await axios.post(
                'http://localhost:3000/singleApiSave',
                validRequest);

            expect(response.status).to.eql(200);
            expect(response.data).to.eql(validRequest);
        });
    });
});