// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb'); // does the same as upper line, only available from ES6
const {MongoClient, ObjectID} = require('mongodb');

// generating new id
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Malik',
    //     age: 21,
    //     location: 'Toronto'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});