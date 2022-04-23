/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module
 * @file initialize.js
 ** ---------------------------------------------------------- */ 'use strict'

import { readFileSync as read } from 'fs'
import { env } from 'process'

import { Path } from  'nox/fs' //'../util/path.js'
import { Package } from './package/package.js'

// ------------------------------------------------------------------------ *



// ------------------------------------------------------------------------ *

//let data = null
//let path = null

/**
 * @typedef {PropertyKey} Prop
 * @param {{
 * path?: string;
 * name?: string;
 * }} [attributes]
 */

function initialize(attributes) {
  const arg = attributes || {}
  const num = Object.keys(arg).length
  // ------ + -----------------------
  const has = (/** @type {Prop} */k) => { return Object.hasOwn(arg, k) }
  const pkg = (/** @type {Path} */p) => {
    const s = read(p.core, { encoding: 'utf8' })
    const o = JSON.parse(s)
    return new Package(o)
  }

  if (num > 1) {
    throw Error('attributes: multiple properties!')
  }
/*
  path = new Path(has('path')
    ? arg.path || null
    : env[arg.name || 'npm_package_json'] || null
  )
  data = pkg(path)
*/
  var path = new Path(has('path')
    ? arg.path || ''
    : env[arg.name || 'npm_package_json'] || ''
  )
  var data = pkg(path)

  return {
    path: path,
    data: data,
  }
}

// ------------------------------------------------------------------------ *
/*
export { data }
export { path }
*/
export { initialize }
