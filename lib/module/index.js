/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module
 * @file index.js
 ** ---------------------------------------------------------- */ 'use strict'

import { env as environment } from 'process'
import { initialize, data, path } from './initialize.js'

// ------------------------------------------------------------------------ *

initialize()

// ------------------------------------------------------------------------ *

const Module = {
  data: data,
  path: path,
  version: data.version,
}

export { Module }
