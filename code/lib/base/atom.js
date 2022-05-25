/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file atom.js
 ** ---------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { Atom as Type } from 'nox/base'
//#endregion

/**
 * @template T
 * @implements {Type<T>}
 */

class Atom {
  #core//<T>

  constructor(x) {
    if (x instanceof Atom)
    {
      this.#core = x.#core
    } else {
      this.#core = x === undefined ? null : x
    }
  }

  clone() {
    return new Atom(this)
  }

  equals(that) {
    if (that instanceof Atom)
    {
      return this.#core === that.#core
    } else { throw new Error('incompatible!') }
  }

  swap(that) {
    if (that instanceof Atom)
    {
      const temp = this.#core
      // ------- + ----
      this.#core = that.#core
      that.#core = temp
      // ------- + ----
      return that
    } else { throw new Error('incompatible!') }
  }

  /*
   | Getter / Setter
   */

  get core() { return this.#core }
  set core(v) { this.#core = v }
}

//#region exports ---------------------------------------------------------- *
export { Atom }
//#endregion
