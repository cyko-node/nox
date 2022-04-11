/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util
 * @file atom.js
 ** ---------------------------------------------------------- */ 'use strict'

/**
 * @template T
 */

class Atom {
  /** ------
   * @type {T}
   */

  #core

  constructor(/** @type {T} */x) {
    if (x instanceof Atom) {
      this.#core = x.#core
    } else {
      this.#core = x
    }
  }

  /**
   * @returns {T}
   */

  get data() { return this.#core }
  set data(/** @type {*} */x) { this.#core = new Atom(x).#core }
}

// ------------------------------------------------------------------------ *

export { Atom }
