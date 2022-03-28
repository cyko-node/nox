'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : TYPE
 + --- + ----------- */

class Type {
  #name // <string>

  constructor(x) {
    if (Array.isArray(x)) {
      this.#name = 'array'
    } else {
      this.#name = typeof(x)
    }
  } static of(x) {
    return new Type(x)
  }


  get name() {
    return this.#name
  }

  set is(x) {
    if (x instanceof Type) {
      return this.#name === x.#name
    } else {
      return this.is(Type.of(x))
    }
  }

//interface is {
  boolean()   { return this.#name === 'boolean' }
  callable()  { return this.#name === 'function' }
  number()    { return this.#name === 'number' }
  string()    { return this.#name === 'string' }
  symbol()    { return this.#name === 'symbol' }

  array()     { return this.#name === 'array' }
  object()    { return this.#name === 'object' || this.array() }
  objective() { return this.object() || this.callable() }
//}

  get is() {
    return this//.is
  }
}

// ------------------------------------------------------------------------- +

export { Type as type }

/* --- + ----------- +
 | NOX | UTIL : TYPE
 + --- + ------------------------------------------------------------------- */
