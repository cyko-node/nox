/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/fs:path
 * @file index.js
 ** ---------------------------------------------------------- */ 'use strict'

export * from './path.js'
export * from './util.js'

export const util = {
  basename:  (await import('./util.js')).basename,
  dirname:   (await import('./util.js')).dirname,
  extname:   (await import('./util.js')).extname,
  normalize: (await import('./util.js')).extname,
  separator: (await import('./util.js')).separator,
  platform:  (await import('./util.js')).platform,
}
// ------------------------------------------------------------------------ *
