var app = require('../fixture.js');
var assert = require('assert');


suite('Init plugin', function() {

  test('Ensure the ZooKeeperPlugin inits and can connect', function(done) {

    app.init(function(err) {
    
      if (err) {
        console.log(err);
      }

      assert.ok(err, null, 'Init should not return error.');

      done();
    });

  });

});