'use strict';

var assign = require('object-assign');
var Filter = require('broccoli-filter');
var resin = require('topcoat-resin');

/**
 * Initialize `ResinFilter` with options
 *
 * @param {Object} inputTree
 * @param {Object} opts
 * @api public
 */

function ResinFilter(inputTree, opts) {
    if (!(this instanceof ResinFilter)) {
        return new ResinFilter(inputTree, opts);
    }

    this.inputTree = inputTree;
    this.opts = opts || {};
}

/**
 * Create object
 */

ResinFilter.prototype = Object.create(Filter.prototype);
ResinFilter.prototype.constructor = ResinFilter;

/**
 * Extensions
 */

ResinFilter.prototype.extensions = ['css'];
ResinFilter.prototype.targetExtension = 'css';

/**
 * Process CSS
 *
 * @param {String} str
 * @api public
 */

ResinFilter.prototype.processString = function (str) {
    this.opts.contents = str;
    return resin(this.opts);
};

/**
 * Module exports
 */

module.exports = ResinFilter;

/**
 * Mixin the resin built-in plugins
 */

assign(module.exports, resin);
