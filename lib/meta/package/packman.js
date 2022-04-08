/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/meta/package
 * @file package.js
 * @info node package data.
 * -----
 * The Packman interface.
 * Represents a person ( author, maintainer, contributor ).
 ** ---------------------------------------------------------- */ 'use strict'

const role = {
  author: 'author',
  maintainer: 'maintainer',
  contributor: 'contributor',
}

class Packman {
  #data // <object>
  #name // <string>
  #mail // <string>
  #role // <Role>

  /**
   * @param {object} o Data object ( json property ).
   * @param {string} o.name
   * @param {string} o.email
   * @param {string} r Role string.
   */

  constructor(o, r) {
    this.#data = o
    this.#name = String(o.name)
    this.#mail = String(o.email)
    this.#role = String(r)
  }

  get data() { return this.#data }

  get name() { return this.#name }
  get mail() { return this.#mail }
  get role() { return this.#role }
}

// ------------------------------------------------------------------------- *

export { role }
export { Packman }
