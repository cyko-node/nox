/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/path
 * @file index.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
//#region posix
import {
  basename  as pBasename,
  dirname   as pDirname,
  extname   as pExtname,
  normalize as pNormalize,
  delimiter as pDelimiter,
  sep       as pSeparator
} from 'path/posix'
//#endregion
//#region win32
import {
  basename  as wBasename,
  dirname   as wDirname,
  extname   as wExtname,
  normalize as wNormalize,
  delimiter as wDelimiter,
  sep       as wSeparator
} from 'path/win32'
//#endregion
//#region cross
import { platform } from 'process'
import {
  basename  as xBasename,
  dirname   as xDirname,
  extname   as xExtname,
  normalize as xNormalize,
  delimiter as xDelimiter,
  sep       as xSeparator
} from 'path'
//#endregion
//#endregion

function delimiter(/** @type {NodeJS.Platform} */p = platform) {
  switch (p) {
    case 'win32': return wDelimiter
    default/*x*/: return pDelimiter
  }
}

function separator(/** @type {NodeJS.Platform} */p = platform) {
  switch (p) {
    case 'win32': return wSeparator
    default/*x*/: return pSeparator 
  }
}

function basename(p, e) { return xBasename(p, e) }
function dirname(p)     { return xDirname(p) }
function extname(p)     { return xExtname(p) }
function normalize(p)   { return xNormalize(p) }


//#region exports ---------------------------------------------------------- *
export { normalize }
export { extname }
export { dirname }
export { basename }
export { separator }
export { delimiter }
//#endregion
