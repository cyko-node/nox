/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module
 * @file index.js
 ** ---------------------------------------------------------- */ 'use strict'

import { env as environment } from 'process'
import { initialize } from './initialize.js'

// ------------------------------------------------------------------------ *

const m = initialize()

// ------------------------------------------------------------------------ *

const Module = {
  data: m.data,
  path: m.path,
  version: m.data.version,
}

export { Module }
export { initialize } from './initialize.js'
