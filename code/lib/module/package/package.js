/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module:package
 * @file package.js
 * -----
 * The Package interface.
 ** ---------------------------------------------------------- */ 'use strict'

import { Person } from './person.js'
import { Version } from './version.js'

// ------------------------------------------------------------------------- *

/**
 * @typedef {{
 *   [key: string]: object;
 *   name: string;
 *   email: string;
 * }} PackagePerson
 * -------- *
 * @typedef {{
 *   [key: string]: object;
 *   name: string;
 *   description: string;
 *   codename: string;
 *   version: string;
 *   license: string;
 *   author: PackagePerson;
 *   maintainers?: (string | PackagePerson)[];
 *   contributors?: (string | PackagePerson)[];
 * }} PackageObject
 */

// ------------------------------------------------------------------------- *

class Package {

  /**
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
   * @param {PackageObject} o
   */

  constructor(o) {
    // copy the data (destructure and restructure, ie deep-copy).
    this.#data = JSON.parse(JSON.stringify(o))

    // #region general
    this.#name = String(this.#data.name)
    this.#description = String(this.#data.description)
    this.#version = new Version(this.#data.version, this.#data.codename)
    this.#author = new Person(this.#data.author, Person.role.author)
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
      let x = new Person(m[i], Person.role.maintainer)
      this.#people.push(x)
      this.#maintainers.push(x)
    }

    for (const i in c) {
      let x = new Person(c[i], Person.role.contributor)
      this.#people.push(x)
      this.#contributors.push(x)
    }
    // #endregion
  }

  get content() { return this.#data }

  get name() { return this.#name }
  get description() { return this.#description }
  get version() { return this.#version }
  get license() { return this.#license }

  get author() { return this.#author }
  get maintainers() { return this.#maintainers }
  get contributors() { return this.#contributors }
  get people() { return this.#people }
}

// ------------------------------------------------------------------------- *

export { Package }
