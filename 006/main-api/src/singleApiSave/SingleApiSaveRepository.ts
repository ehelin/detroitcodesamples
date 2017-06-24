import {SingleSaveApiRequest} from "./SingleSaveApiRequest";

export interface SingleApiSaveRepository {
    save(singleApiSaveRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest>
}

export class SingleApiSaveRepositoryImpl implements SingleApiSaveRepository {
    save(singleApiSaveRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest> {
        throw new Error('not implemented');
    }

    constructor() {}
}