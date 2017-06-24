import {SingleSaveApiRequest} from "./SingleSaveApiRequest";
import {boolean} from "joi";

export interface SingleApiSaveRepository {
    save(singleApiSaveRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest>
    get(id:number): Promise<SingleSaveApiRequest>
}

let inMemoryRepositoryArray: SingleSaveApiRequest[] = [];

export class SingleApiSaveRepositoryImpl implements SingleApiSaveRepository {

    public async get(id: number): Promise<SingleSaveApiRequest> {
        let foundSingleApiSaveRequest: SingleSaveApiRequest | null = null;

        await inMemoryRepositoryArray.forEach((singleApiSaveRequest) => {
            if(singleApiSaveRequest.Id === id){
                foundSingleApiSaveRequest = singleApiSaveRequest
            }
        });

        if(foundSingleApiSaveRequest !== null){
            return Promise.resolve(foundSingleApiSaveRequest);
        }else{
            return Promise.reject(new Error('no single api save request found'));
        }
    }

    public save(singleApiSaveRequest: SingleSaveApiRequest): Promise<SingleSaveApiRequest> {

        try{
            inMemoryRepositoryArray.push(singleApiSaveRequest);
        }catch(err){
            Promise.reject('Error: ' + err);
        }

        return Promise.resolve(singleApiSaveRequest);
    }

    constructor() {}
}