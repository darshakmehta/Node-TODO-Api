const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '5bbaa1f10c327ff6a0cbd0be'
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5bbaa1f10c327ff6a0cbd0be').then((todo) => {
    console.log(todo);
});