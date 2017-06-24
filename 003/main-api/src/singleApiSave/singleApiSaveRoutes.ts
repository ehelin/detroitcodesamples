import {IReply, Request, Server} from "hapi";

export const handler = (request: Request, reply: IReply) => {
    reply({});
};

export const registerServerSingleApiSave = (server: Server) =>  {
    server.route({
        path: '/singleApiSave',
        method: 'POST',
        handler: handler,
    })
};