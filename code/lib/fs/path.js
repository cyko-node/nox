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

import { Atom } from 'nox/base'
import { path } from 'nox/util'

import { Path as P } from 'nox/fs'

// ------------------------------------------------------------------------ *

const help = {
  basename:  path.basename,
  dirname:   path.dirname,
  extname:   path.extname,
  normalize: path.normalize,
}

/**
 * @implements {P}
 * @extends {Atom<String>}
 */

class Path extends Atom {
  constructor(x) {
    if (x instanceof Path ||
       (x instanceof Atom && typeof x.core === 'string')
    ) {
      super(x.core)
    } else {
      super(String(x))
    }
  }

  name(n = false) {
    if (n) {
      return help.dirname(help.normalize(this.core))
    } else {
      return help.dirname(this.core)
    }
  }

  base(e) {
    return help.basename(this.core, e)
  }

  string(n = false) {
    if (n) {
      return help.normalize(this.core)
    } else {
      return this.core
    }
  }

  vector() {
    return this.core.split(/[\\/]/).filter((v) => {
      return v.length > 0 // skip empty strings
    })
  }
}

export { Path }
/* *
 * @implements {Atom<Path, PathCore>}
 *

class Path {
  #core // <PathCore>
  #list // <PathCore[]> portions (segments)

  constructor(x) {
    const s = String(x)
    this.#core = s
    this.#list = s.split(/[\\/]/).filter((v) => {
      return v.length > 0 // skip empty strings
    })
  }

  clone() {
    return new Path(this)
  }


  get core() {
    return this.#core
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
*/
