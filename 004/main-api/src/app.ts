import Hapi = require('hapi');
import {registerServerSingleApiSave} from "./singleApiSave/singleApiSaveRoutes";

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err: any) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

registerServerSingleApiSave(server);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request: any, reply: any) {
        reply('Welcome to main-api');
    }
});