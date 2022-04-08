/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/type
 * @file name.js
 * -----
 * 
 ** ---------------------------------------------------------- */ 'use strict'

const name = {
     array: 'array',
    bigint: typeof 1n,
   boolean: typeof true,
  function: typeof (() => {}),
    number: typeof 1,
    object: typeof {},
    string: typeof '',
    symbol: typeof Symbol(1)
}

// ------------------------------------------------------------------------- *

export { name }
