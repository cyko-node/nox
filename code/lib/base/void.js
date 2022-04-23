/** ----------------------------------------------------------------------- *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file misc.js
 * -----
 * Virtuals, defined in ambient typescript's.
 ** --------------------------------------------------------- */ 'use strict'

class Abstract {
  constructor() {
    throw new Error('trying to instantiate a abstract typescript object.')
  }
}

/**
 * @template T
 */

class Clonable extends Abstract {}

/**
 * @template T
 */

class Hookable extends Abstract {}

//#region exports --------------------------------------------------------- *
export { Hookable }
export { Clonable }
//#region
