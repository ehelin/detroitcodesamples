import {IReply, Request, Server} from "hapi";
import {SingleSaveApiRequest} from "./SingleSaveApiRequest";
import {SingleApiSaveServiceImpl, SingleApiSaveService} from "./SingleApiSaveService";
import * as Joi from 'joi';

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
        config: {
            validate: {
                payload: Joi.object().keys({
                    Id: Joi.number().min(0).required(),
                    PropertyOne: Joi.string().required(),
                    PropertyTwo: Joi.string().required(),
                    PropertyThree: Joi.string().required(),
                    PropertyFour: Joi.string().required(),
                    PropertyFive: Joi.string(),
                }),
            },
        },
    })
}