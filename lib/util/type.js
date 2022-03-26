/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : TYPE
 + --- + ----------- */

/**
 * @template T
 */

class Type {
  #name // <string>

  /**
   * @param {T} x
   */

  constructor(x) {
    if (Array.isArray(x)) {
      this.#name = 'array'
    } else {
      this.#name = typeof(x)
    }
  }

  get is() {
    return this
  }

  set is(x) {
    if (x instanceof Type) {
      return this.#name === x.#name
    } else {
      return this.is(Type.of(x))
    }
  }

  array()     { return this.#name === 'array' }
  boolean()   { return this.#name === 'boolean' }
  callable()  { return this.#name === 'function' }
  number()    { return this.#name === 'number' }
  object()    { return this.#name === 'object' || this.array() }
  string()    { return this.#name === 'string' }
  symbol()    { return this.#name === 'symbol' }
  objective() { return this.object() || this.callable() }

  get name() {
    return this.#name
  }
}

/**
 * {@link Type **`Type`**} `constructor`
 * @template T
 * @param {T} x
 */

function of(x) {
  return new Type(x)
}

/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : TYPE > EXPORTS
 + --- + ----------- */

export { of }
