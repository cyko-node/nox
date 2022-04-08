/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta/package
 * @file package.js
 * @info node package data.
 * -----
 * The Version interface.
 * Represents the version and codename.
 ** ---------------------------------------------------------- */ 'use strict'

class Vumber /* version number */ {
  #value // <string>

  /**
   * @param {string} x `major` | `minor` | `patch`
   */

  constructor(x) {
    this.#value = x
  }

  number() { return Number(this.#value) }
  string() { return String(this.#value) }
}

class Version {
  #major // <Vumber>
  #minor // <Vumber>
  #patch // <Vumber>
  #name  // <string>

  /**
   * @param {string} v `1.23.456`
   * @param {string} n `codename`
   */

  constructor(v, n) {
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

export { Version }
