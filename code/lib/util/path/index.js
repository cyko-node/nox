/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/path
 * @file path.js
 * ----------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { delimiter as pDelimiter, sep as pSeparator } from 'path/posix'
import { delimiter as wDelimiter, sep as wSeparator } from 'path/win32'
import {
  basename  as xBasename,
  dirname   as xDirname,
  extname   as xExtname,
  normalize as xNormalize,
} from 'path'
//#endregion
//#region implementation --------------------------------------------------- *

function delimiter(/** @type {NodeJS.Platform} */p) {
  switch (p) {
    case 'win32': return wDelimiter
    default/*x*/: return pDelimiter
  }
}
function separator(/** @type {NodeJS.Platform} */p) {
  switch (p) {
    case 'win32': return wSeparator
    default/*x*/: return pSeparator 
  }
}

function basename(p, e) { return xBasename(p, e) }
function dirname(p) { return xDirname(p) }
function extname(p) { return xExtname(p) }
function normalize(p) { return xNormalize(p) }

//#endregion
//#region exports ---------------------------------------------------------- *
export { normalize }
export { extname }
export { dirname }
export { basename }
export { separator }
export { delimiter }
//#endregion
