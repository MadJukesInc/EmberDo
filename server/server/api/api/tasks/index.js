var _     = require('lodash');
var tasks = require('../../../models/tasks');

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
    var onTaskGet      = function (request, reply) {
        var user = request.auth.credentials || null;

        var cb   = cbBuilder(request, reply);

        tasks.get(null, null, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskPost     = function (request, reply) {
        var newTask = request.payload;
        var cb      = cbBuilder(request, reply);

        tasks.post(newTask, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskPut      = function (request, reply) {
        var updTask = request.payload;
        var cb      = cbBuilder(request, reply);

        tasks.put(updTask.id, updTask, function(err, results) {
            cb(err,results);
        });
    };
    var onTask         = function (request, reply) {
        switch (request.method) {
            case 'get':
                onTaskGet(request, reply);
                break;
            case 'post':
                onTaskPost(request, reply);
                break;
            case 'put':
                onTaskPut(request, reply);
                break;
        }
    };
    var onTaskIDGet    = function (request, reply) {
        var taskID = request.params.taskID;
        var user   = request.auth.credentials || null;
        var cb     = cbBuilder(request, reply);

        tasks.get(taskID, user, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskIDPost   = function (request, reply) {
        var taskID = request.params.taskID;
        var task   = request.payload;
        var user   = request.auth.credentials || null;
        var cb     = cbBuilder(request, reply);

        tasks.put(taskID, task, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskIDPut    = function (request, reply) {
        var taskID = request.params.taskID;
        var task   = request.payload;
        var user   = request.auth.credentials || null;
        var cb     = cbBuilder(request, reply);

        tasks.put(taskID, task, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskIDDelete = function (request, reply) {
        var taskID = request.params.taskID;

        var user   = request.auth.credentials || null;
        var cb     = cbBuilder(request, reply);

        tasks.delete(taskID, function(err, results) {
            cb(err,results);
        });
    };
    var onTaskID       = function (request, reply) {
        switch (request.method) {
            case 'get':
                onTaskIDGet(request, reply);
                break;
            case 'post':
                onTaskIDPost(request, reply);
                break;
            case 'put':
                onTaskIDPut(request, reply);
                break;
            case 'delete':
                onTaskIDDelete(request, reply);
                break;
        }
    };

    server.route({
        method: '*',
        path: '/' + path,
        handler: onTask
    });
    server.route({
        method: '*',
        path: '/' + path + '/{taskID}',
        handler: onTaskID
    });
};