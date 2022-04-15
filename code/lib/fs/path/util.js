/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/fs:path
 * @file util.js
 ** ---------------------------------------------------------- */ 'use strict'

import {
  basename  as xBasename,
  dirname   as xDirname,
  extname   as xExtname,
  normalize as xNormalize,
  sep       as xSep
} from 'path'

import { sep as pSep } from 'path/posix'
import { sep as wSep } from 'path/win32'

// ------------------------------------------------------------------------ *

const platform = {
  cross: 'cross',
  win32: 'win32',
  posix: 'posix',
}

const separator = (std = platform.cross) => {
  switch (std) {
    case platform.cross: return xSep
    case platform.posix: return pSep
    case platform.win32: return wSep
    default: throw new Error(`unknown standard/platform: (${std})`)
  }
}

// ------------------------------------------------------------------------ *

const basename  = (p) => { return xBasename(p) }
const dirname   = (p) => { return xDirname(p) }
const extname   = (p) => { return xExtname(p) }
const normalize = (p) => { return xNormalize(p) }

// ------------------------------------------------------------------------ *

export { normalize }
export { extname }
export { dirname }
export { basename }

export { separator, platform }
