var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin27@ds125453.mlab.com:25453/todo-api" || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}