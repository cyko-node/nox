/** ------------------------------------------------------------------------ *
 * @module nox/util
 * @file file.js
 ** ------------------------------------------------- */ 'use strict' /* --- */

import { readFileSync } from 'fs'
import { type } from '../util/type'
import { default as has } from '../base/has'

// ------------------------------------------------------------------------- +  

const FileEncoding = {
  ascii:     'ascii',
  base64:    'base64',
  base64url: 'base64url',
  binary:    'binary',
  hex:       'hex',
  latin1:    'latin1',
  latin:     'latin1',
  ucs2:      'ucs2',
  utf8:      'utf8',
  utf16le:   'utf16le',

  default:   'utf8'
}

class FilePath {
  #full = String(null)
  #home = String(null)
  #file = String(null)

  constructor(p) {
    if (type.of(p).is.string()) {
      this.#full = p
      this.#home = p.slice(0, p.lastIndexOf('/'))
      this.#file = p.slice(p.lastIndexOf('/') + 1)
    } else {
      throw new Error(`invalid path: <${type.of(p).name}> (${p})`)
    }
  }

  get full() { return this.#full }
  get home() { return this.#home }
  get file() { return this.#file }
}

class File {
  #data //= null
  #path //= null

  constructor(p, e = encodings.default) {
    if (!has.property(encodings, e)) {
      this.#data = readFileSync(p, { encoding: e })
      this.#path = new FilePath(p)
    } else {
      throw new Error(`invalid encoding: <${type.of(e).name}> (${e})`)
    }
  }

  get data()    { return this.#data }
  get content() { return this.#data }
  get path()    { return this.#path }
  get name()    { return this.#path.file }
}

// ------------------------------------------------------------------------- +

export { encodings }
export { File }
