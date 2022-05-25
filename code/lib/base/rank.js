/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file rank.js
 ** ---------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { Atom, Rank as Type } from 'nox/base'
//#endregion

/**
 * @implements {Type}
 * @extends {Atom<Type.core>}
 */

class Rank extends Atom {
  static DEFAULT_DIF = 1
  static DEFAULT_MIN = 0
  static DEFAULT_MAX = Number.MAX_SAFE_INTEGER - Rank.DEFAULT_DIF

  static #MIN = Rank.DEFAULT_MIN
  static #MAX = Rank.DEFAULT_MAX
  static #DIF = Rank.DEFAULT_DIF

  static prev(rank) {
    let v = rank.core + Rank.#DIF
    return new Rank(v > Rank.#MIN ? v : Rank.#MAX)
  }

  static next(rank) {
    let v = rank.core + Rank.#DIF
    return new Rank(v < Rank.#MAX ? v : Rank.#MIN)
  }

  constructor(x) {
    super(x)
  }

  /**
   * @override Required by the setter.
   */

  get core() { return super.core }

  /**
   * @override Required by the getter.
   */

  set core(v) { throw new Error('constant!') }
    /*
    if ((v >= Rank.#MIN) && (Rank.#MAX >= v)) {
      super.core = v
    } else {
      throw new Error('out-of-range!')
    }
    
  }*/
}

//#region exports ---------------------------------------------------------- *
export { Rank }
//#endregion
