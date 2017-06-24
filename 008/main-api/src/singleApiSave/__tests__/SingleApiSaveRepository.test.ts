import {SingleApiSaveRepository, SingleApiSaveRepositoryImpl} from "../SingleApiSaveRepository";
import {SingleSaveApiRequest} from "../SingleSaveApiRequest";
import {singleApiSaveJSON} from "./singleApiSaveJSON";
import {expect, use} from 'chai';
import * as sinonChai from 'sinon-chai';

use(sinonChai);

describe('Single Save Api Repository', () => {

    describe('save', () => {
        const singleApiSaveRepository = new SingleApiSaveRepositoryImpl();
        const singleApiSaveRequest = SingleSaveApiRequest.fromJSON(singleApiSaveJSON);

        it('save record', async ()  => {
            const response = await singleApiSaveRepository.save(singleApiSaveRequest);

            expect(response).to.eql(singleApiSaveRequest);
        });

        it('retrieve record', async () => {
            await singleApiSaveRepository.save(singleApiSaveRequest);

            const response = await singleApiSaveRepository.get(1);

            expect(response).to.eql(singleApiSaveRequest);
        });
    });
});