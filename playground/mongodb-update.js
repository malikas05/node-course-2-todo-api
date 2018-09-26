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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bab9d2c250b1242d4e7f6f1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bab9d2c250b1242d4e7f6f1')
    }, {
        $set: {
            name: 'Malik'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});