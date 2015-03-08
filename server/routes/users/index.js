'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply) {
    User.find({}, function(err, data) {
      console.log(data);
      reply(data);
    });
  }
};
