import {IReply, Request, Server} from "hapi";
import {SingleSaveApiRequest} from "./SingleSaveApiRequest";
import {SingleApiSaveServiceImpl, SingleApiSaveService} from "./SingleApiSaveService";

export const handler = (singleApiSaveService: SingleApiSaveService) => async (request: Request, reply: IReply) => {
    const singleApiSaveRequest = SingleSaveApiRequest.fromJSON(request.payload);

    return singleApiSaveService.save(singleApiSaveRequest)
        .then((response) => {
            return Promise.resolve(reply(response));
        }).catch((error) => {
            return Promise.reject(reply(error));
        });
}

export const registerServerSingleApiSave = (server: Server, singleApiSaveService: SingleApiSaveService) =>  {
    server.route({
        path: '/singleApiSave',
        method: 'POST',
        handler: handler(singleApiSaveService),
    })
}