'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | INDEX
 + --- + ----- */

export { default as pkg } from '../package.json' assert { type: 'json' }

export * from './core/index.js'
export * from './util/index.js'

import * as core from './core/index.js'
import * as util from './util/index.js'

export const nox = {
  has: core.has,
  get: core.get,

  file: util.file,
  type: util.type
}

/* --- + ----- +
 | NOX | INDEX
 + --- + ------------------------------------------------------------------- */
