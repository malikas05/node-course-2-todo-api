var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://malikas:malikas241@ds143573.mlab.com:43573/node-todo-app');

module.exports = {
    mongoose: mongoose
};