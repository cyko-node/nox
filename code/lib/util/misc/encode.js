/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/math
 * @file encode.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { encode as encode_t } from 'nox/util/misc'
//#endregion

/**
 * @type {encode_t}
 */

function encode(num, radix) {
  return Number(num).toString(radix)
}

//#region exports ---------------------------------------------------------- *
export { encode }
//#endregion
