'use strict'

const transactionPoolManager = require('./manager')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: require('../package.json'),
  alias: 'transactionPoolManager',
  register: async (container, options) => transactionPoolManager
}

/**
 * The interface used by concrete implementations.
 * @type {TransactionPoolInterface}
 */
exports.TransactionPoolInterface = require('./interface')