/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util
 * @file type.js
 * -----
 * Type interface.
 ** ---------------------------------------------------------- */ 'use strict'

const type = {
  array:    'array',
  boolean:  'boolean',
  function: 'function',
  number:   'number',
  object:   'object',
  string:   'string',
  symbol:   'symbol',

  of(x) {
    return new Type(x)
  }
}

class Type {
  #name // <string>

  constructor(x) {
    if (Array.isArray(x)) {
      this.#name = 'array'
    } else {
      this.#name = typeof x
    }
  }

  get name() { return this.#name }
  get is()   { return this }
//{
  array()    { return this.#name === 'array' }
  boolean()  { return this.#name === 'boolean' }
  function() { return this.#name === 'function' }
  number()   { return this.#name === 'number' }
  object()   { return this.#name === 'object' || this.array() }
  string()   { return this.#name === 'string' }
  symbol()   { return this.#name === 'symbol' }
//}



  is(x) {
    if (x instanceof Type) {
      return this.#name === x.name
    } else {
      return this.#name === type.of(x).name
    }
  }
}


// ------------------------------------------------------------------------- *

export { Type }
export { type }
