// Use Chai expect to assert our tests
var expect    = require("chai").expect;


require('marko/node-require').install();

// We need the full path to the current directory.
// We know where the relevant files are from there.
var thisDirectory = __dirname;

// Our test data is in a sub-directory of the test directory
var dataDir = thisDirectory + '/data/';

// Our module should be up one level from the test directory
var view = require("../index.js");
view.init({arRoot: dataDir});

var    httpMocks = require('node-mocks-http'); // quickly sets up REQUEST and RESPONSE to be passed into Express Middleware
var    request = {}; // define REQUEST
var    response = {}; // define RESPONSE

// Describe what we expect from the module
describe('Module - activerules-views', function() {

  describe('Given a request for a valid site home page', function() {
    
    beforeEach(function(done) {
        /* 
         * before each test, reset the REQUEST and RESPONSE variables 
         * to be send into the middle ware
        **/
        request = httpMocks.createRequest({
            method: 'GET',
            url: '/',
            headers: {
                host: 'www.example.com'
            }
        });
        response = httpMocks.createResponse();
        response.locals = {
            site: {
              site: 'example'
            }
          };
        response.marko = function(template, data) {
            return template;
          };

        done(); // call done so that the next test can run
    });
        
    it('provides a valid home page', function () {
      
        view.sendPage(request, response, 'home');
    });
  });
  
  describe('Given a request for a valid site home page and an overidden layout', function() {
    
    beforeEach(function(done) {
        /* 
         * before each test, reset the REQUEST and RESPONSE variables 
         * to be send into the middle ware
        **/
        request = httpMocks.createRequest({
            method: 'GET',
            url: '/',
            headers: {
                host: 'www.example.com'
            }
        });
        response = httpMocks.createResponse();
        response.locals = {
            site: {
              site: 'example',
              view: {
                layout: 'mobile_first'
              }
            }
          };
        response.marko = function(template, data) {
            return template;
          };

        done(); // call done so that the next test can run
    });
        
    it('it uses the overriden layout', function () {
      
        view.sendPage(request, response, 'home');
    });
  });
  
  describe('Given a request for a valid site home page and an overidden layout', function() {
    
    beforeEach(function(done) {
        /* 
         * before each test, reset the REQUEST and RESPONSE variables 
         * to be send into the middle ware
        **/
        request = httpMocks.createRequest({
            method: 'GET',
            url: '/',
            headers: {
                host: 'www.example.com'
            }
        });
        response = httpMocks.createResponse();
        response.locals = {
            site: {
              site: 'example',
              view: {
                layout: 'mobile_first'
              }
            }
          };
        response.marko = function(template, data) {
            return template;
          };

        done(); // call done so that the next test can run
    });
        
    it('it uses the overriden layout', function () {
      
        view.sendPage(request, response, 'home');
    });
  });
  
});