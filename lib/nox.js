/** ------------------------------------------------------------------------ *
 * @path cyko:nox (main)
 * @file nox.js
 * -----
 * Main module entry.
 * -----
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 ** ---------------------------------------------------------- */ 'use strict'

import { default as pson } from '../package.json' assert { type: 'json' }
import { Package } from './meta/package.js'

const pkg = new Package(pson)
const version = pkg.version

export { pkg, version }
export * from './meta/package.js'



function log(...msg) {
  console.log(...msg)
}
/*
let x = await import('nox/package', { assert: { type: 'json' } })
import { default as p } from 'nox/package' assert { type: 'json' }
log(x.default)
*/
let v = version

log(' name:', v.name)
log('major:', v.major.number())
log('minor:', v.minor.string())
log('patch:', v.patch.number())
log('-----:', v.string())
