/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta/package
 * @file package.js
 * @info node package data.
 * -----
 * The Package interface.
 * Represents the package.json contents.
 ** ---------------------------------------------------------- */ 'use strict'

import { Packman, role } from './packman.js'
import { Version } from './version.js'

// ------------------------------------------------------------------------- *

class Package {

  /**
   * @typedef {{
   *   [Key: string]: object;
   *   name: string;
   *   email: string;
   * }} PackagePerson
   * @typedef {{
   *   [Key: string]: object;
   *   name: string;
   *   description: string;
   *   codename: string;
   *   version: string;
   *   license: string;
   *   author: PackagePerson;
   *   maintainers?: (string | PackagePerson)[];
   *   contributors?: (string | PackagePerson)[];
   * }} PackageObject
   *//**
   * @type {PackageObject}
   */

  #data // <object> the complete contents.

  #name         // <string>
  #description  // <string
  #version      // <Version>
  #license      // <string>

  #people       // <Packman[]>
  #author       // <Packman>
  #maintainers  // <Packman[]>
  #contributors // <Packman[]>

  /**
   * @param {PackageObject} data
   */

  constructor(data) {
    // copy the data (destructure and parse, ie deep-copy).
    this.#data = JSON.parse(JSON.stringify(data))

    // #region general
    this.#name = String(this.#data.name)
    this.#description = String(this.#data.description)
    this.#version = new Version(this.#data.version, this.#data.codename)
    this.#author = new Packman(this.#data.author, role.author)
    this.#license = String(this.#data.license)
    // #endregion

    // #region persons: init arrays
    this.#people = [ this.#author ]
    this.#maintainers = []
    this.#contributors = []
    // #endregion
    // #region persons: fill arrays (people, maintainers, contributors)
    const m = this.#data.maintainers
    const c = this.#data.contributors
  
    for (const i in m) {
      let x = new Packman(m[i], role.maintainer)
      this.#people.push(x)
      this.#maintainers.push(x)
    }

    for (const i in c) {
      let x = new Packman(c[i], role.contributor)
      this.#people.push(x)
      this.#contributors.push(x)
    }
    // #endregion
  }

  get data() { return this.#data }

  get name() { return this.#name }
  get description() { return this.#description }
  get version() { return this.#version }
  get license() { return this.#license }

  get people() { return this.#people }
  get author() { return this.#author }
  get maintainers() { return this.#maintainers }
  get contributors() { return this.#contributors }
}

// ------------------------------------------------------------------------- *

export { Package }
