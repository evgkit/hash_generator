var colors = require('colors');
var bcrypt = require('bcrypt');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('123456789', salt, function(err, hash) {
        console.log(hash.green);
    });
});