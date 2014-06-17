/*global afterEach, describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rm = require('rimraf');

describe('broccoli-resin()', function () {
    afterEach(function (cb) {
        rm.sync(path.join(__dirname, 'tmp'));
        rm.sync(path.join(__dirname, '../tmp'));
        cb();
    });

    it('should process CSS', function (cb) {
        var css = '.testprefix-classname {\n  background: white;\n}';
        cb(assert.strictEqual(fs.readFileSync(path.join(__dirname, 'tmp/test.css'), 'utf8'), css));
    });
});
