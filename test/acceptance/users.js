'use strict';

var expect = require('chai').expect;
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var server = require('../../server/index');
var User = require('../../server/models/user');


describe('general', function() {
  beforeEach(function(done) {
    User.remove({}, function() {
      done();
    });
  });

  //  POST /USERS
  describe('post /users', function() {
    it('should create a user', function(done) {
      var options = {
        method: 'post',
        url: '/users',
        payload: {
          name: 'todd'
        }
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/users');
        done();
      });
    });
  });

  // GET /USERS
  describe('get /users', function() {
    it('should display the users', function(done) {
      var options = {
        method: 'get',
        url: '/users'
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        // expect(response.result[0].name).to.equal('todd');
        done();
      });
    });
  });
});