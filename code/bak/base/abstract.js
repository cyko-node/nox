/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file abstract.js
 * -----
 * Virtuals, defined in ambient typescript's.
 ** ---------------------------------------------------------- */ 'use strict'

/**
 * Non declared type.
 *
 * Used to prevent instantiation of abstract objects.
 *
 */

class Abstract {
  constructor() {
    throw new Error('trying to instantiate a abstract typescript object.')
  }
}

/**
 * @template T
 */

class Toggable extends Abstract {}

/**
 * @template T
 */

class Clonable extends Abstract {}


//#region exports ---------------------------------------------------------- *
export { Toggable }
export { Clonable }
//#region
