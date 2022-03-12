
const pkg = require('../package.json')

/* ------------------------------------------------------------------------- */

exports.package = function() {
  return pkg
}

/* ------------------------------------------------------------------------- */

exports.has = function(obj, key) {
  return Object.keys(obj).includes(key)
}

exports.get = function(obj, key, def = null) {
  return this.has(obj, key) ? obj[key] : def
}

/* ------------------------------------------------------------------------- */

exports.to = class {

  static string(val, ...arg) {
    let x = String(val)
    arg.forEach((a) => { x = String(x).concat(' ', String(a)) })
    return x
  }

  static int(arg) {
    let x = Number(arg)
    return x >= 0 ? Math.floor(x) : Math.ceil(x)
  }
}

/* ------------------------------------------------------------------------- */

exports.is = class {

  static array(x) {
    return exports.is.v(x) || (typeof x === 'object' && Array.isArray(x))
  }

  static boolean(x) { return exports.is.v(x) || typeof x ===  'boolean' }
  static method(x)  { return exports.is.v(x) || typeof x === 'function' }
  static number(x)  { return exports.is.v(x) || typeof x ===   'number' }
  static object(x)  { return exports.is.v(x) || typeof x ===   'object' }
  static string(x)  { return exports.is.v(x) || typeof x ===   'string' }

  /**
   * TESTING REQUIRED!
   */

  static n(x) { return x == null }
  static u(x) { return x === undefined }
  static v(x) { return exports.is.n(x) || exports.is.u(x) }
  static x(x) { return exports.is.n(x) && exports.is.u(x) }

}
