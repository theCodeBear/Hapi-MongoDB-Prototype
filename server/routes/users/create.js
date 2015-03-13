'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      name: Joi.string().required()
    }
  },
  handler: function(request, reply) {
    User.register(request.payload, function(err, user) {
      if (err) {
        reply.redirect('/', {message:'User already exists!'});
      } else  {
        reply.redirect('/users');
      }
    });
  }
};
