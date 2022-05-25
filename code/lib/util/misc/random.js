/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/misc
 * @file unique.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { random as random_t } from 'nox/util/misc'
//#endregion

/**
 * @type {random_t}
 */

function random(num = 16) {
  if (num >= 1 && num <= 16) {
    const str = String(Math.random())
    const cut = str.indexOf('.') + 1
    const end = cut + num
    return Number(str.substring(cut, end))
  } else {
    throw new Error('out-of-range!')
  }
}

//#region exports ---------------------------------------------------------- *
export { random }
//#endregion
