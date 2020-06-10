
const assert = require('assert');
const User = require('../src/user');

describe('Deleting a User', () => {
    let joe;

    beforeEach(done => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    it('Modal Instance Removal Method', done => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then(user => {
                assert(user === null)
            })
        done();
    })

    it('Class "Remove" Removal Method', done => {
        User.remove({ name: 'Joe' })
            .then(User.findOne({ name: 'Joe' }))
            .then(user => {
                assert(user === null);
            })
        done();
    })

    it('Class "FindOneAndRemove" Removal Method', done => {
        User.findOneAndRemove({ name: 'Joe' })
            .then(User.findOne({ name: 'Joe' }))
            .then(user => {
                assert(user === null);
            })
        done();
    })

    it('Class "FindByIdAndRemove" Removal Method', done => {
        User.findByIdAndRemove({ name: "Joe" })
            .then(User.findOne({ name: 'Joe' }))
            .then(user => {
                assert(user === null);
            })
        done()
    })

});
