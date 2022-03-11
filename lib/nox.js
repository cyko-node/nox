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

exports.string = function(val, ...arg) {
  let x = String(val)
  arg.forEach((a) => { x = String(x).concat(' ', String(a)) })
  return x
}

exports.int = function(val) {
  let x = Number(val);
  return x >= 0 ? Math.floor(val) : Math.ceil(val)
}

/* ------------------------------------------------------------------------- */

exports.to = {}

this.to.string = this.string
this.to.int    = this.int

/* ------------------------------------------------------------------------- */

exports.is = {

  array(v) {
    return v != null && (typeof v === 'object' && Array.isArray(v))
  },

  boolean(v) { return v != null && typeof v === 'boolean'  },
  method(v)  { return v != null && typeof v === 'function' },
  number(v)  { return v != null && typeof v === 'number'   },
  object(v)  { return v != null && typeof v === 'object'   },
  string(v)  { return v != null && typeof v === 'string'   },
}
