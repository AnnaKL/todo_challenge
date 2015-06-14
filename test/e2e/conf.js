exports.config = {

  baseUrl: 'http://localhost:8080/app/',

  allScriptsTimeout: 11000,

  specs: ['todoFeature.js'],

  capabilities: {
    'browserName': 'firefox'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};