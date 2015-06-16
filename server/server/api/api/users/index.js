var _     = require('lodash');
var users = require('../../../models/users');

var cbBuilder = function (request, reply) {
    return function (err, results) {
        if (err) {
            reply(err);
            throw err;
        }

        reply(null, results);
    };
};

module.exports = function (path, server) {
    var onGet  = function (request, reply) {
        var userID = request.params.userID;
        var cb     = cbBuilder(request, reply);

        if (userID) {
            users.get(userID, cb)
        }
        else {
            users.get(cb);
        }
    };
    var onPost = function (request, reply) {
        var payload = request.payload;
        var cb      = cbBuilder(request, reply);

        users.post(payload, cb);
    };

    server.route({
        method: 'GET',
        path: '/' + path + '/{userID?}',
        handler: onGet
    });
    server.route({
        method: 'POST',
        path: '/' + path,
        handler: onPost
    });
};