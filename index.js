'use strict';

const contentForHead = require('./lib/content-for-head');

module.exports = {
  name: require('./package').name,

  contentFor: function(type, config) {
    if (type === 'head') {
      return contentForHead(config);
    }
  }
};
