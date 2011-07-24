exports = module.exports = function(env) {

  // Options
  
  var TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
  
  var option_tables = {
    development: function() {
      this.maxAge = 14 * 24 * 60 * 60 * 1000;         // Two weeks   // Time before a session goes stale
      this.shortSession = 12 * 24 * 60 * 60 * 1000;    // We no longer have a short session option 1000 * 60 * 60 * 60         // 60 minutes
      this.reqTimeout = 30000;
      this.sessionKey = 'session';
      this.host = 'http://localhost';
      this.port = 80;
      this.dumpExceptions = true;
      this.showStack = true;
      this.errorToHtml = true;
      this.compressCss = true;
      //this.redis = { host: 'localhost', port: 6379, db: 'myproject' }
      //this.mongo = { db: 'mongodb://localhost/myproject'}
      //this.mysql = { host: 'localhost', port: 3306, user: 'root', password: 'root', database: 'myproject' }
    },
    staging: function() {
      this.host = 'http://clickdummy.skookumlabs.com'
      this.dumpExceptions = false
      this.errorToHtml = false
    },
    production: function() {
      this.host = "http://clickdummy.com"
    }
  }
  
  // Cascade options
  
  option_tables.staging.prototype = new option_tables.development()
  option_tables.production.prototype = new option_tables.staging()

  return new option_tables[env]();
  
};