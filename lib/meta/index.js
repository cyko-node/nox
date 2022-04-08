/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta
 * @file index.js
 * @info environment
 ** ---------------------------------------------------------- */ 'use strict'

import * as path from 'path'
// @ts-ignore - json imports are experimental in es module mode imports
//import data from '../../package.json' assert { type: 'json' }
import { initialize } from "./initialize.js"

// ------------------------------------------------------------------------ *

const pkg = initialize({ file: '../../package.json' })
const version = pkg.version

// ------------------------------------------------------------------------ *

const meta = {
  initialize: initialize,
  pkg: pkg,
  version: version
}

// ------------------------------------------------------------------------ *

export { meta }
export { meta as cyko }
export { pkg }
export { version }
