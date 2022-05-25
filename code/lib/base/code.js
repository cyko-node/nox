/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file code.js
 ** ---------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { unique } from 'nox/util/misc'
import { Atom, Code as Type } from 'nox/base'
//#endregion

/**
 * @implements {Type}
 * @extends {Atom<Type.core>}
 */

class Code extends Atom {
  constructor() {
    super(unique())
    //super.clone = this.clone // make sure clonizz are disabled!
    
    for (var p = Object.getPrototypeOf(this); p != null; p = Object.getPrototypeOf(p)) {
      if (Object.hasOwn(p, 'clone')) {
        p.clone = this.clone
      }
    }
    
  }

  /**
   * @override
   * @returns {Code} Declare for TS compatibility.
   */

  clone() {
    throw new Error('unique!')
  }

  /**
   * @override Required by the setter.
   */

  get core() {
    return super.core
  }

  /**
   * @override Required by the getter.
   */

  set core(v) {
    throw new Error('constant!')
  }
}

//#region exports ---------------------------------------------------------- *
export { Code }
//#endregion
