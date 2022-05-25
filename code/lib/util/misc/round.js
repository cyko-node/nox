/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/misc
 * @file unique.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { round as round_t } from 'nox/util/misc'
//#endregion

/**
 * @type {round_t}
 */

function round(n, abs = true) {
  if (typeof n === 'number') {
    /**
     * Math.round returns the nearest integer as follows:
     *
     * ```js
     * Math.round(+0.5) > 1
     * Math.round(-0.5) > 0 // want -1
     * ```
     *
     * Workaround:
     * Round the absolute ( posetive ) value of the number.
     * Return as negative or posetive ( according to the original value ).
     */

    if (abs) {
      const x = Math.round(Math.abs(n))
      return n < 0 ? -x : x
    } else {
      return Math.round(n)
    }
  } else {
    throw new Error('NaN')
  }
}

//#region exports ---------------------------------------------------------- *
export { round }
//#endregion
