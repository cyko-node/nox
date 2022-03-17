const pkg = require('../package.json')

// -------------------------------------------------------------------------- +

function package() { return pkg }

// -------------------------------------------------------------------------- +

function has(arg, key = undefined) {
  if (key === undefined) {
    // has(arg)
    // arg exists?
    return arg !== undefined
  } else {
    // has(object, key)
    // object[key] exists?
    return Object.prototype.hasOwnProperty.call(arg, key)
  }
}

function get(obj, key, def = null) {
  return has(obj, key || null /* don't pass undefined*/) ? obj[key] : def
}

// -------------------------------------------------------------------------- +

function string(val, ...arg) {
  x = String(val)
  arg.forEach((a) => { x = String(x).concat(' ', String(a)) })
  return x
}

function int(val) {
  if (has(val)) {
    let x = Number(val)
    return x >= 0 ? Math.floor(x) : Math.ceil(x)
  } else {
    return undefined // NaN
  }
}

module.exports = {
  package,
  has,
  get,
  string,
  int,
}
