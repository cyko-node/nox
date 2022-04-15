/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file atom.js
 ** ---------------------------------------------------------- */ 'use strict'

/**
 * @template T
 */

class Atom {
  /** @type {T} */ #core

  constructor(x) {
    if (x instanceof Atom) {
      this.#core = x.#core
    } else {
      this.#core = x
    }
  }

  get data( ) { return this.#core }
  set data(x) { this.#core = new Atom(x).#core }
}

// ------------------------------------------------------------------------ *

export { Atom }
