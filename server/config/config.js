var env = process.env.NODE_ENV || 'development';

if (env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if (env === 'production'){
    process.env.MONGODB_URI = 'mongodb://malikas:malikas241@ds143573.mlab.com:43573/node-todo-app';
}