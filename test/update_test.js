
const assert = require('assert');
const User = require('../src/user');

describe('Updating Records', () => {
    let joe;

    beforeEach(done => {
        joe = new User({ name: 'Joe' })
        joe.save()
            .then(() => done())
    })

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then(users => {
                assert(users.length === 1)
                assert(user[0].name === 'Alex')
            })
        done()
    }

    it('instance type Using set n Save', done => {
        joe.set('name', 'Alex')
        assertName(joe.save(), done)
    })

    it('a Model Instance Can Update', done => {
        assertName(joe.update({ name: 'Alex' }), done)
    })

    it('Class Can Update', done => {
        assertName(
            User.update({ name: 'Joe' }, { name: 'Alex' }),
            done
        )
    })

    it('Class Can Update One record', done => {
        assertName(
            User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
            done
        )
    })

    it('Class Can Find a Record By Id and Update', done => {
        assertName(
            User.findByIdAndUpdate({ name: 'Joe' }, { name: "Alex" }),
            done
        )
    })

})
