/** ----------------------------------------------------------------------- *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file hook.js
 ** --------------------------------------------------------- */ 'use strict'

/**
 * namespace Hook (virtual)
 */

var Hook = undefined

/**
 * interface hook
 *//**
 * @type {import('nox/base').hook}
 */

const hook = {
  cloner: 'cloner',
  getter: 'getter',
  setter: 'setter',
}

//#region exports --------------------------------------------------------- *
export { Hook }
export { hook }
//#endregion
