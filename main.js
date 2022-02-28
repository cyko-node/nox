const pkg = require('./package.json')

/**
 * Get an (r/o) objective representation of the **package.json** contents.
 */

exports.package = function() {
  return pkg
}

/**
  * `object` has a property with the specified `name` ?
  *
  * ---
  *
  * @param {object} obj `object`
  * @param {string} key `name`
  */

exports.has = function(obj, key) {
  return Object.keys(obj).includes(key)
}

/**
 * `object` has a property (method) with the specified `name` ?
 *
 * ---
 *
 * @param {object} obj `object`
 * @param {string} key `name`
 */

exports.fas = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) ? true : false
}

/**
 * Get the `object` property `name`.
 *
 * ---
 *
 * Selects `object[name]` or `default` based upon weather the `object`
 * {@link exports.has has} a property with the specified `name`.
 *
 * ---
 *
 * @param {object}  obj  `object`
 * @param {string}  key  `name`
 * @param {*|null} [def] `default` = `null`
 */

exports.get = function(obj, key, def = null) {
  return this.has(obj, key) ? obj[key] : def
}



/*
const o = exports.o = {

  /**
   * `object` has a **property** with the specified `name`?
   * @param {object} obj `object`
   * @param {string} key `name`
   * @returns {boolean} `true/false`
   *

  has: function(obj, key) {
    return Object.keys(obj).includes(key)
  },

  /**
   * `object` has a **method** with the specified `name`.
   * @alias module:nox.fas
   * @param {object} obj `object`
   * @param {string} key `name`
   * @returns {boolean} `true/false`
   *

  fas: function(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  },

  /**
   * Get `object` property `name`.
   *
   * Selects between `object[name]` and `default` based upon weather the
   * `object` {@link o.has `has`} a property with the specified `name`.
   * @param {object} obj  `object`
   * @param {string} key  `name`
   * @param {*|null}[def] `default` : `null`
   *

  get: function(obj, key, def = null) {
    return this.has(obj, key) ? obj[key] : def
  },

}
*/
