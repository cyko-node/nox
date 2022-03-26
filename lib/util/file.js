/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : FILE
 + --- + ----------- */

import { readFileSync } from 'fs'
import * as type from './type.js'

// ------------------------------------------------------------------------- +

class File {
  #data = null
  #path = String(null)
  #name = String(null)

  constructor(data, path) {
    this.#data = data
    this.#path = path
    this.#name = this.#path.slice(this.#path.lastIndexOf('/') + 1)
  }

  get data() { return this.#data }
  get path() { return this.#path }
  get name() { return this.#name }

  object() {
    return JSON.parse(this.#data)
  }
}

/**
 * {@link File **`File`**} `constructor`
 * @param {string} p The file path.
 */

function read(p) {
  if (type.of(p).is.string()) {
    return new File(readFileSync(p, { encoding: 'utf8' }), p)
  } else {
    throw new Error(`expected a <string>, got a <${type.of(p).name}> (${p})`)
  }
}

/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : FILE > EXPORTS
 + --- + ----------- */

export { read }
