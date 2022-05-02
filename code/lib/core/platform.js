/** ----------------------------------------------------------------------- *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file index.js
 ** --------------------------------------------------------- */ 'use strict'

/**
 * @type {typeof import('nox/core').Platform.Name}
 */

const Name = {
  aix:     'aix',
  android: 'android',
  cygwin:  'cygwin',
  darwin:  'darwin',
  freebsd: 'freebsd',
  haiku:   'haiku',
  linux:   'linux',
  netbsd:  'netbsd',
  openbsd: 'openbsd',
  sunos:   'sunos',
  win32:   'win32'
}

/**
 * @type {typeof import('nox/core').Platform.Type}
 */

const Type = {
  dos: 'dos',
  nix: 'nix'
}

/**
 * @type {import('nox/core').Platform}
 */

const Platform = {
  Name: Name,
  Type: Type,
}

//#region exports --------------------------------------------------------- *
export { Platform }
//#endregion
