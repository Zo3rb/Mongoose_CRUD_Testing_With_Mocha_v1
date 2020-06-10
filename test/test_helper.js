
// Test Helper Methods to Enable Us to test The Crud Operations with Mongoose by Mocha
const mongoose = require('mongoose');

// to Avoid The Mongoose Promise Deprecation We'll use The Global Promise
mongoose.Promise = global.Promise;

// Before Action that Fired Only One Time 

before(done => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', error => {
            console.warn("Error Ocurred: ", error)
        });
})

beforeEach(done => {
    mongoose.connection.collections.users.drop();
    done();
})