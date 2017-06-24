import {SingleSaveApiRequest} from "../SingleSaveApiRequest";
import {singleApiSaveJSON} from "./singleApiSaveJSON";
import {SingleApiSaveServiceImpl} from "../SingleApiSaveService";
import {Server} from "hapi";
import * as Mocha from 'mocha'
import * as Chai from 'chai';
import * as Sinon from 'sinon';
import {expect, use} from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import {SingleApiSaveService} from "../SingleApiSaveService";
import SinonStub = Sinon.SinonStub;
import {SingleApiSaveRepository} from "../SingleApiSaveRepository";

use(sinonChai);

describe('Single Save Api Service', () => {

    it('saves data for valid request', async () => {
        //create input
        const singleSaveApiRequest = SingleSaveApiRequest.fromJSON(singleApiSaveJSON);

        //set up mock
        let mockSingleApiSaveRepository: SingleApiSaveRepository;

        mockSingleApiSaveRepository = {
            save: sinon.stub().returns(Promise.resolve(singleSaveApiRequest)),
        };

        const singleApiSaveService = new SingleApiSaveServiceImpl(mockSingleApiSaveRepository);

        //make call
        const response = singleApiSaveService.save(singleSaveApiRequest);

        //verify result
        expect(mockSingleApiSaveRepository.save).to.be.calledWith(singleSaveApiRequest);
        expect(response).to.eql(singleSaveApiRequest);
    });
});