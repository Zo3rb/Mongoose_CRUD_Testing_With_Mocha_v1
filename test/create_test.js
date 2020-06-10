
// The Create Operation Test File With Mocha
const assert = require('assert');
const User = require('../src/user');

// Testing First Operation By Creating instance and Saving it
describe("Creating Record", () => {
    it("Saves a User", done => {
        const joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => assert(!joe.isNew));
        done()
    });
});
