/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/type
 * @file type.js
 * -----
 * Type interface.
 ** ---------------------------------------------------------- */ 'use strict'

import { name } from './name.js'

// ------------------------------------------------------------------------- *

class Type {
  #name // <string>

  constructor(x) {
    if (Array.isArray(x)) {
      this.#name = name.array
    } else {
      this.#name = x == null ? 'null' : typeof x
    }
  }

  get name() { return this.#name }
  get is()   { return this }
//{
  array()    { return this.#name === name.array }
  bigint()   { return this.#name === name.bigint }
  boolean()  { return this.#name === name.boolean }
  function() { return this.#name === name.function }
  number()   { return this.#name === name.number || this.bigint() }
  object()   { return this.#name === name.object || this.array() }
  string()   { return this.#name === name.string }
  symbol()   { return this.#name === name.symbol }

  void() { return Object.keys(name).includes(this.#name) }
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
