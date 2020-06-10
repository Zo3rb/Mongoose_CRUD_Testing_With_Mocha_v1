
// The Reading Operation Tests File With Mocha
const assert = require('assert');
const User = require('../src/user');

describe('Reading Users Out of The Database', () => {
    let joe;
    beforeEach(done => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => {
                done();
            });
    });

    it('Finds All Users With The Name of The Joe', done => {
        User.find({ name: 'Joe' })
            .then(users => {
                assert(users[0]._id.toString() === joe._id.toString())
            });
        done()
    });

    it('Find a User With a Particular id', done => {
        User.findOne({ _id: joe._id })
            .then(user => {
                assert(user.name === 'Joe');
            });
        done()
    });
});
