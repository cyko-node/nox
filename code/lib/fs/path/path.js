/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util
 * @file path.js
 ** ---------------------------------------------------------- */ 'use strict'

import { accessSync, constants as flags, statSync } from 'fs'
import * as libfs from 'fs'
import * as libpath from 'path'

const lib = {
  fs: libfs,
  path: libpath,
}

// ------------------------------------------------------------------------ *

class Test {
  static available(path) {
    try {
      accessSync(path, flags.F_OK)
    } catch(e) {
      return false
    } return true
  }

  static readable(path) {
    try {
      accessSync(path, flags.R_OK)
    } catch(e) {
      return false
    } return true
  }

  static writable(path) {
    try {
      accessSync(path, flags.W_OK)
    } catch(e) {
      return false
    } return true
  }
 
  static file(path) {
    try {
      return statSync(path).isFile()
    } catch(e) {
      return false
    }
  }

  static directory(path) {
    try {
      return statSync(path).isDirectory()
    } catch(e) {
      return false
    }
  }
}

// ------------------------------------------------------------------------ *

import { Atom } from 'nox/base'
import {
  basename,
  dirname,
  extname,
  normalize,
  separator,
  platform
} from 'nox/fs'

// ------------------------------------------------------------------------ *

/**
 * @extends Atom<string>
 */

class Node extends Atom {
  constructor(x) {
    const s = String(x)

    super(s)

    if (x === undefined) {
      throw new Error('Node(x: string) x(undefined)!')
    }
    if (x == null) {
      throw new Error('Node(x: string) x(null)!')
    }
    if (s.length < 1) {
      throw new Error('Node(x: string) x("")!')
    }
  }
}

// ------------------------------------------------------------------------ *

class Path extends Node {
  #name // excluding the last portion
  #base // the last portion
  #list // portions (segments)

  constructor(x) {
    super(x)

    this.#name = dirname(super.data)
    this.#base = basename(super.data)
    this.#list = super.data.split(/[\\/]/).filter((v) => {
      return v.length > 0 // skip empty strings
    })
  }

  get name() { return this.#name }
  get base() { return this.#base }

  // list
  // part(#) > list[#]
  // size    > list.length

  normalize(save = false) {
    if (save) {
      return this.data = normalize(this.data)
    } else {
      return normalize(this.data)
    }
  }
}

/**
 * @extends Atom<Path>
 */

class Filee extends Atom {
  //#path

  constructor(x) {
    super(new Path(x))
  }

  get path() { return this.data.name }
  get name() { return this.data.base }
  get type() { return extname(String(this.data.data)) }
}

class File {
  #path // <Path>
  #info = {
    type: '?',
  }

  constructor(x) {
    this.#path = new Path(x)
    this.#info.type = extname(this.#path.base).substring(1) || this.#info.type
  }

  get path() { return this.#path.name }
  get name() { return this.#path.base }
  get type() { return this.#info.type }
}
// ------------------------------------------------------------------------ *

export { File }
export { Path }
