'use strict';

var resin = require('./');

module.exports = resin('test/fixtures', {
  namespace: 'testprefix'
});
