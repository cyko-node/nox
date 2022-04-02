/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta
 * @file package.js
 * -----
 * package.json interface.
 ** ---------------------------------------------------------- */ 'use strict'

/**
 * Person: `author` | `maintainer` | `contributor`
 */

class Packman {
  #name // <string>
  #mail // <string>

  /**
   * @param {object} o
   * @param {string} o.name
   * @param {string} o.email
   */

  constructor(o) {
    this.#name = o.name
    this.#mail = o.email
  }

  get name() { return this.#name }
  get mail() { return this.#mail }
}

// ------------------------------------------------------------------------- *

/**
 * Version: `major` | `minor` | `patch`
 */

class Vumber {
  #value // <string>

  constructor(x) {
    this.#value = x
  }

  number() { return Number(this.#value) }
  string() { return String(this.#value) }
}

/**
 * Version.
 */

class Version {
  #major // <V>
  #minor // <V>
  #patch // <V>
  #name  // <string>

  /**
   * @param {string} v `1.23.456`
   * @param {string} n `codename`
   */

  constructor(v = '#.#.#', n) {
    this.#major = new Vumber(v.slice(0, v.indexOf('.')))
    this.#minor = new Vumber(v.slice(v.indexOf('.') + 1, v.lastIndexOf('.')))
    this.#patch = new Vumber(v.slice(v.lastIndexOf('.') + 1))
    this.#name  = String(n)
  }

  get major() { return this.#major }
  get minor() { return this.#minor }
  get patch() { return this.#patch }

  string() {
    return `${
      this.#major.string()}.${
      this.#minor.string()}.${
      this.#patch.string()
    }`
  }

  get name() { return this.#name }
}

// ------------------------------------------------------------------------- *

/**
 * The package interface.
 */

class Package {
  #name        // <string>
  #description // <string
  #version     // <Version>
  #author      // <Person>
  #license     // <string>

  /**
   * @param {object} o `package.json`
   * @param {string} o.name
   * @param {string} o.description
   * @param {string} o.codename
   * @param {string} o.version
   * @param {string} o.license
   */

  constructor(o) {
    this.#name        = String(o.name)
    this.#description = String(o.description)
    this.#version     = new Version(o.version, o.codename)
    this.#author      = new Packman(o.author)
    this.#license     = String(o.license)
  }

  get name()        { return this.#name }
  get description() { return this.#description }
  get version()     { return this.#version }
  get author()      { return this.#author }
  get license()     { return this.#license }
}

// ------------------------------------------------------------------------- *

export { Package }
