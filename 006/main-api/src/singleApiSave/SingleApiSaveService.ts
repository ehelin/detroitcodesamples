import {SingleSaveApiRequest} from "./SingleSaveApiRequest";
import {SingleApiSaveRepository} from "./SingleApiSaveRepository";

export interface SingleApiSaveService {
    save(singleSaveApiRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest>;
}

export class SingleApiSaveServiceImpl implements SingleApiSaveService {

    public save(singleSaveApiRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest> {
        throw new Error('not implemented')
    };

    constructor(private singleApiSaveRepository: SingleApiSaveRepository) {}
};