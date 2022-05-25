/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/misc
 * @file unique.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { random, unique as unique_t, encode, Radix } from 'nox/util/misc'
//#endregion

const size = 16        // random-number digits
const base = Radix.txt // encode mode ( alphanumeric )

/**
 * Combining the current time with a random number should, in theory, provide
 * a totaly unique result. Let's hope it's enough!
 *
 * @type {unique_t}
 */

function unique() {
  return encode(Date.now(), base) + encode(random(size), base)
}

//#region exports ---------------------------------------------------------- *
export { unique }
//#endregion
