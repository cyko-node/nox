/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util
 * @file path.js
 ** ---------------------------------------------------------- */ 'use strict'

import { basename, dirname, extname } from 'path'
import { Atom } from './atom.js'

// ------------------------------------------------------------------------ *

class Path extends Atom {
  constructor(/** @type {string?} */arg) {
    const str = String(arg)
    super(str)

    if (arg === undefined) {
      throw Error('Path(x: string) x(undefined)!')
    }
    if (arg == null) {
      throw Error('Path(x: string) x(null)!')
    }
    if (str.length < 1) {
      throw Error('Path(x: string) x(empty)!')
    }
  }

  /**
   * @returns {string}
   */

  get complete() { return super.data }
  /**
   * @see unix dirnane
   */
  name() { return dirname(super.data) }
  /**
   * @see unix basenane
   */
  base() { return basename(super.data) }
  /**
   * @see node path.extname
   */
  type() { return extname(super.data) }
}

// ------------------------------------------------------------------------ *

export { Path }
