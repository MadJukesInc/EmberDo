var Confidence = require('confidence');


var criteria = {
    env: process.env.NODE_ENV
};


var config = {
    $meta: 'This file configures the plot device.',
    projectName: 'server',
    port: {
        api: {
            $filter: 'env',
            test: 9090,
            $default: 8080
        }
    },
    plugins: {
        api: {
            paths: ['api/tasks', 'api/users']
        },
        db: {
            "database": "todo_test",
            "user": "postgres",
            "password": "",
            "options": {
                "host": "localhost",
                "dialect": "postgres",
                "pool": {
                    "max": 5,
                    "min": 0,
                    "idle": 10000
                }
            }
        }
    }
};


var store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
