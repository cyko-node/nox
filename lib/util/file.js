'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : FILE
 + --- + ----------- */

import { readFileSync } from 'fs'
import { type } from './type.js'

// ------------------------------------------------------------------------- +

class File {
  static encoding = {
    ascii:     'ascii',
    base64:    'base64',
    base64url: 'base64url',
    binary:    'binary',
    hex:       'hex',
    latin1:    'latin1',
    latin:     'latin1',
    ucs2:      'ucs2',    // Universal Character Set (2-byte)
    utf8:      'utf8',    // Unicode Transformation Format, extends ASCII, variable-width encoding, Transforms / Encodes: ISO 10646 (Unicode)
    utf16le:   'utf16le', // Unicode Transformation Format, extends UCS-2, variable-width encoding, Transforms / Encodes: ISO 10646 (Unicode)
    default:   'utf8'
  }

  #data = null // <string> content
  #path = null // <string>
  #name = null // <string>

  constructor(path, encoding = File.encoding.default) {
    const t = t = type.of(path)

    if (t.is.string()) {
      this.#data = readFileSync(path, { encoding: encoding })
      this.#path = path
      this.#name = path.slice(path.lastIndexOf('/') + 1)
    } else {
      throw new Error(`expected a <string>, got a <${t.name}> (${path})`)
    }
  } static read(path, encoding = File.encoding.default) {
    return new File(path, encoding)
  }

  get data() { return this.#data }
  get path() { return this.#path }
  get name() { return this.#name }

  object() {
    return JSON.parse(this.#data)
  }
}

// ------------------------------------------------------------------------- +

export { File }
export { File as file }

/* --- + ----------- +
 | NOX | UTIL : FILE
 + --- + ------------------------------------------------------------------- */
