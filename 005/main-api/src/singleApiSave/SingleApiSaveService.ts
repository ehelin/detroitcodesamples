import {SingleSaveApiRequest} from "./SingleSaveApiRequest";

export interface SingleApiSaveService {
    save(singleSaveApiRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest>;
}

export class SingleApiSaveServiceImpl implements SingleApiSaveService {
    save(singleSaveApiRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest> {
        throw new Error('not implemented');
    }
}