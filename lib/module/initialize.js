/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module
 * @file initialize.js
 ** ---------------------------------------------------------- */ 'use strict'

import { readFileSync as read } from 'fs'
import { env } from 'process'
import { sull } from 'nox/constants'
import { Path } from '../util/path.js'
import { Package } from './package.js'

// ------------------------------------------------------------------------ *

/**
 * @see {@link nox.Module.init **`Module.init`**} `source` and `attributes`
 */
/*
const sources = {

  /**
   * @typedef {nox.Module.init.source.env}    e
   * @typedef {nox.Module.init.source.file}   f
   * @typedef {nox.Module.init.source.struct} o
   *

  env: {
    default: 'npm_package_json',
    key: 'env',
    pkg: (/** @type {e} *name) => {
      return sources.file.pkg(env[name] || '')
    }
  },

  file: {
    key: 'file',
    pkg: (/** @type {f} *path) => {
      return new Package(JSON.parse(read(path, { encoding: 'utf8' })))
    }
  },

  object: {
    key: 'object',
    pkg: (/** @type {o} *data) => {
      // @ts-ignore: the constructor expects a specific object structure.
      return new Package(data)
    }
  },
}
*/
// ------------------------------------------------------------------------ *

let data = null
let path = null

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
  const pkg = (/** @type {Path} */path) => {
    const s = read(path.complete, { encoding: 'utf8' })
    const o = JSON.parse(s)
    return new Package(o)
  }

  if (num > 1) {
    throw Error('attributes: multiple properties!')
  }

  path = new Path(has('path')
    ? arg.path || null
    : env[arg.name || 'npm_package_json'] || null
  )
  data = pkg(path)
}

/**
 * Module initializer.
 * @param {nox.Module.init.attributes} [attributes]
 */

/*
function initialize(attributes) {
  const uses = (k) => { return Object.hasOwn(attributes || {}, k) }
  // ------- + ------------------------------------
  const keys = Object.keys(attributes || {}).length
  const args = arguments.length
  // ------- + ----------------
  const impl = (/** @type {typeof attributes} *attr) => {
    attr = attr || {} // may be undefined!

    if (uses(sources.env.key)) {
      // impl({ env: '...' })
      return sources.env.pkg(attr.env || '')
    }

    if (uses(sources.file.key)) {
      // impl({ file: '/path/file.json' })
      return sources.file.pkg(attr.file || '')
    }

    if (uses(sources.object.key)) {
      // impl({ object: { ...; } })
      return sources.object.pkg(attr.object || {})
    } else {
      // impl( )
      return sources.env.pkg(sources.env.default)
    }
  }

  if (args > 1 || keys > 1) {
    throw Error('multiple initializers!')
  }

  let data = impl(attributes)
 
  if (data) {
    return data
  } else {
    throw Error('<Package> construction failure!')
  }
}
*/
// ------------------------------------------------------------------------ *

export { data }
export { path }
export { initialize }
