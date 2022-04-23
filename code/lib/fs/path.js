/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—--
 * @path cyko:nox/fs
 * @file path.js
 ** ---------------------------------------------------------- */ 'use strict'

import { accessSync, constants as flags, statSync } from 'fs'
import * as libfs from 'fs'
import * as libpath from 'path'

// ------------------------------------------------------------------------ *

import { Atom } from 'nox/base' //'../../base/index.js'
import { path } from 'nox/util'

import { PathCore } from 'nox/fs'

// ------------------------------------------------------------------------ *

const help = {
  basename:  path.basename,
  dirname:   path.dirname,
  extname:   path.extname,
  normalize: path.normalize,
}

/**
 * @extends Atom<PathCore>
 */

class Path extends Atom {
  #list // portions (segments)

  constructor(x) {
    const s = String(x)

    if (x === undefined) {
      throw new Error('Path(x: string) x = undefined!')
    }
    if (x == null) {
      throw new Error('Path(x: string) x = null')
    }
    if (s.length < 1) {
      throw new Error('Path(x: string) x = ""')
    }

    super(s)

    this.#list = s.split(/[\\/]/).filter((v) => {
      return v.length > 0 // skip empty strings
    })
  }

  name(n = false) {
    if (n) {
      return help.dirname(this.normalize())
    } else {
      return help.dirname(this.core)
    }
  }

  base(e) {
    return help.basename(this.core, e)
  }

  normalize() {
    return help.normalize(this.core)
  }

  get parts() {
    return this.#list.length
  }

  part(i) {
    return this.#list[i]
  }
}

class File extends Atom {
  #path// <Path>
  #type// <>

  constructor(x) {
    super(new Atom(x))

    this.#path = new Path(x)
    this.#type = new Atom(help.extname(this.#path.base()).substring(1) || '?')
  }

  get path() { return this.#path.name() }
  get name() { return this.#path.base() }
  get type() { return this.#type.core }
}

// ------------------------------------------------------------------------ *

export { File }
export { Path }
