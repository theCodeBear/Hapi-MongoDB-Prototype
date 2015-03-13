'use strict';

var expect = require('chai').expect;
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var server = require('../../server/index');
var User = require('../../server/models/user');

describe('users', function() {
  beforeEach(function(done) {
    User.remove(function() {
      User.register({name: 'kent'}, function() {
        done();
      });
    })
  });

  // POST /USERS
  describe('post /users', function() {
    it('should register a user', function(done) {
      User.register({name: 'todd'}, function(err, user) {
        expect(err).to.not.be.ok;
        expect(user.name).to.equal('todd');
        expect(user).to.be.ok;
        done();
      });
    });

    it('should not register a user', function(done) {
      User.register({name: 'kent'}, function(err, user) {
        expect(err).to.be.ok;
        expect(user).to.not.be.ok;
        done();
      });
    });
  });
});