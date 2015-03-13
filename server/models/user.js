'use strict';

var mongoose = require('mongoose');
var User;


var userSchema = mongoose.Schema({
  name: {type: String, required: true}
});


userSchema.statics.register = function(input, cb) {
  User.findOne({name: input.name}, function(err, user) {
    if (user) { return cb(true); }

    user = new User(input);
    user.save(function() {
      cb(null, user);
    });
  });
};



User = mongoose.model('User', userSchema);
module.exports = User;