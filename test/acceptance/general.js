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
    User.find({}, function(data) {
      done();
    });
  });

  //  GET /
  describe('get /', function() {
    it('should return 200', function(done) {
      var options = {
        method: 'get',
        url: '/'
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.payload).to.include('Welcome');
        done();
      });
    });
  });

  //  GET /HOME.HTML - checks the /{params*} route
  describe('get /home.html', function() {
    it('should return 200', function(done) {
      var options = {
        method: 'get',
        url: '/home.html'
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.payload).to.include('public');
        done();
      });
    });
  });
});
