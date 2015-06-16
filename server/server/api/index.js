var Hoek = require('hoek');

exports.register = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });

    var APIPaths = options.paths;

    APIPaths.forEach(function(path) {
        require('./' + path)(path, server);
    });

    next();
};


exports.register.attributes = {
    name: 'api'
};
