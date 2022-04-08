/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta
 * @file initialize.js
 * -----
 * Module initializer.
 ** ---------------------------------------------------------- */ 'use strict'

import { readFileSync } from 'fs'
import { env } from 'process'
import { Package } from './package/index.js'

// ------------------------------------------------------------------------ *

/**
 * Default environment variable used as the `pqckage.json` path.
 */

const dev = 'npm_package_json'
const att = {
  env: 'env',
  file: 'file',
  object: 'object'
}

/**
 * Use a file ( read the content )
 * @param {object} p Path including filename.
 */

function initFromFile(p) {
  return new Package(JSON.parse(readFileSync(p, { encoding: 'utf8' })))
}

/**
 * Use a structured object.
 * @param {object} o Imported or otherwise obtained data.
 */

function initFromObject(o) {
  return new Package(o)
}

/**
 * @param {nox.meta.InitializerAttributes} a Attributes.
 */

function initialize(a) {

  /**
   * @param {PropertyKey} p Attribute property.
   */

  const has = (p) => { return Object.hasOwn(a, p) }
  const num = Object.keys(a).length

  if (num > 1) {
    throw Error('multiple initializers!')
  }

  if (has(att.env)) {
    return initFromFile(a[att.env] === 'default'
      ? env[dev]
      : env[String(a.env)]
    )
  }

  if (has(att.file)) {
    return initFromFile(a.file)
  }

  if (has(att.object)) {
    return initFromObject(a.object)
  } else {
    throw Error('unknown or missing initializer!')
  }
}

/*
 * @param {object} a
 *

function initialize(a) {
  switch (a.type) {
    case initializer.environment: return initialize({
      type: initializer.file,
      data: Object.hasOwn(a, 'data') ? env[a.data] : env[dev]
    })

    case initializer.file: {
      let x = read(a.data, { encoding: 'utf8' })
      let o = JSON.parse(x)
      return new Package(o)
    }

    case initializer.data: {
      let x = JSON.stringify(a.data)
      let o = JSON.parse(x)
      return new Package(o)
    }

    default: {
      throw new Error(`unknown initialize attribute: type (${a.type}) `)
    }
  }
}
*/
// ------------------------------------------------------------------------ *

export { initialize }
