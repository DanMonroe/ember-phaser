'use strict';

const contentForHead = require('./lib/content-for-head');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon: function () {
    return true;
  },

  contentFor: function(type, config) {
    if (type === 'head') {
      return contentForHead(config);
    }
  }
};
