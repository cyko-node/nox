/** ----------------------------------------------------------------------- *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file toggable.js
 ** --------------------------------------------------------- */ 'use strict'

//#region imports --------------------------------------------------------- *
import { Toggable as T } from 'nox/base'
//#endregion

/**
 * @implements {T}
 */

class Toggable {
  #value// <boolean>

  constructor(v = false) {
    this.#value = false
  }

  toggle() { return this.#value = !this.#value }
  on()     { return this.#value == true  }
  off()    { return this.#value == false }
  status() { return this.#value }

  /**
   * ```ts
   * interface Valuable
   * ```
   */

  value() {
    return this.#value
  }
}

//#region exports --------------------------------------------------------- *
export { Toggable }
//#endregion
