const pkg = require('./package.json')

/* ------------------------------------------------------------------------- */

exports.package = function() {
  return pkg
}

/* ------------------------------------------------------------------------- */

exports.has = function(obj, key) {
  return Object.keys(obj).includes(key)
}

exports.fas = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) ? true : false
}

exports.get = function(obj, key, def = null) {
  return this.has(obj, key) ? obj[key] : def
}

/* ------------------------------------------------------------------------- */

exports.string = function(val) {
  const x = String(val)
  return x
}

exports.int = function(val) {
  const x = Number(val);
  return x >= 0 ? Math.floor(val) : Math.ceil(val)
}

/* ------------------------------------------------------------------------- */

/**
 * TESTS ...
 *
 * > ---
 *
 * `npm this_file.js <test> <[1-9]>`
 */

const test = process.argv.includes('test', 2) ? process.argv.at(3) : false

if (test) {
  require('./dev/test').run(this, Number(test))
}
