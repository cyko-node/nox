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

class x {
  #data = {
    boolean:   1.1, // typeof

    string:    2.1, // typeof

    number:    3.0, // typeof
    float:     3.2,
    integer:   3.3,

    bigint:    4.1, // typeof

    object:    5.1, // typeof
    array:     5.2,

    symbol:    6.1, // typeof

    undefined: 9.1, // typeof
    null:      9.2,
  }

  #name

  #tame(val, str = typeof(val)) {
    switch (str) {
      case 'object': {
        if (val === null) {
          return 'null'
        } else {
          return Array.isArray(val) ? 'array' : str
        }
      }

      default: {
        return str
      }
    }
  }

  constructor(val) {
    this.#name = this.#tame(val)
  }

  get name() {
    return this.#name
  }
}

const a = [
  {
    s: '',
    i: 9,
    n: 1.9,
    b: false,
    a: [],
    o: {},
    m: () => {},
    u: null,
  }, {
    s: "",
    a: [ null ],
    i: 0,
    c: x,
    m: function() {},
    x: Infinity,
  }, {
    s: ``,
    c: new x(1),
  },
]

function iscls(v) {
  let r = false
  if (v != null) {
    if (Boolean(v.constructor)) {
      const s = String(v.constructor).substring(0, 5)
      console.log(`:c:${s}`)
      r = s === 'class'
    }

    if (v.prototype === undefined) {
      console.log(`:p:undefined`)
    } else {
      if (Boolean(v.prototype.constructor)) {
        const s = String(v.prototype.constructor).substring(0, 5)
        console.log(`:p:${s}`)
        r = s === 'class'
      }
    }
  }

  return r
}

a.forEach((o) => {
  console.log('----------')
  console.log()

  for (const k in o) {
    if (Object.prototype.hasOwnProperty.call(o, k)) {
      const v = o[k]
      const t = new x(v)

      console.log(`type:v:(${k}):`, v)
      console.log(`typeof:(${k}):`, typeof v)
      console.log(`type:n:(${k}):`, t.name)
      console.log(`isclass(${k}):`, iscls(o[k]))
      console.log()

      if (v != null) {
        if (Boolean(v.constructor)) {
          const u = String(v.constructor)//.substring(0, 5)
          console.log('[class]:', u)
        }

        if (v.prototype != undefined) {
          if (Boolean(v.prototype.constructor)) {
            const u = String(v.prototype.constructor)//.substring(0, 5)
            console.log('[proto]:', u)
          }
        }
      }
    }
  }
})
