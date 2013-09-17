var ZK = require('zkjs');


// Plugin for mixdown exposing the interfaces.
var ZooKeeperPlugin = function(namespace) {
  var zkInstance = null;

  if (!this instanceof ZooKeeperPlugin) {
    throw new Error('Please instantiate using keyword "new."  Broadway expects this.');
  }

  /**
  * @param options.path {String}: path to the zoo keeper node with the site configurations.
  *
  * @param options.zookeeper {Object}: zkjs options. - https://github.com/dannycoates/zkjs#new
    hosts: ['localhost:2181'],        // array of zookeeper instances
    root: '/',                        // the root path for the session
    readOnly: false,                  // allow read-only connections
    timeout: 120000,                  // requested timeout for the session
    requestTimeout: 30000,            // milliseconds before timing out a zk request
    maxReconnectAttempts: 15,         // number of attempts to re-establish a connection
    retryPolicy: ZK.retry.no()        // default retry policy
    retryOn: ZK.errors.RETRY_DEFAULTS,// array of error codes to automatically retry
    autoResetWatches: true,           // maintain watches if the zookeeper instance changes
    credentials: []                   // array of credentials to auth the session with
    logger: null                      // an object that implements the 'global.console' interface (for debugging)
  **/
  this.attach = function(options) {
debugger;
    // init zk instance
    zkInstance = new ZK(options.zookeeper);

    this.getSites = function() {

      // return the list of site configurations from the zk path
    };
  };

  // Initialize the plugin here.
  this.init = function(done) {
    console.log('hello from init');

    // connect to zoo keeper and ensure it is available.
    zkInstance.start(done);

  };

};

module.exports = ZooKeeperPlugin;