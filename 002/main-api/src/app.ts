import Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Welcome to main-api');
    }
});