/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file atom.js
 ** ---------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { Hook, hook, Clonable, Hookable } from 'nox/base'
//#endregion


/**
 * @template T
 * @implements {Clonable<Atom<T>>}
 * @implements {Hookable<Atom<T>>}
 */

class Atom {
  /**
   * @typedef {Hook.Link<Atom<T>, Atom<T>>} Cloner
   * @typedef {Hook.Link<Atom<T>, void>} Getter
   * @typedef {Hook.Link<Atom<T>, T>} Setter
   *//**
   * @typedef {Hook.Link<Atom<T>>} Link `Cloner` | `Getter` | `Setter`
   * @typedef {Hook.Name} Name
   */

  /**
   * The encapsulated data.
   * @type {T}
   */

  #core
  #link = {
    cloner: false,
    getter: false,
    setter: false,
  }
  #hoox = {
  /** @type {Cloner} */cloner: (...x) => { return new Atom(this.#core) },
  /** @type {Getter} */getter: (...x) => { return },
  /** @type {Setter} */setter: (...x) => { return x[1] },
  }

  constructor(/** @type {T} */v) {
    if (v instanceof Atom) {
      this.#core = v.#core
    } else {
      this.#core = v
    }
  }

  get core() {
    if (!this.#link.getter) {
      this.#link.getter = true
      this.#hoox.getter(this, this.#core)
      this.#link.getter = false
    }

    return this.#core
  }

  set core(/** @type {T} */v) {
    if (!this.#link.setter) {
      this.#link.setter = true
      this.#core = this.#hoox.setter(this, v)
      this.#link.setter = false
    } else {
      this.#core = v
    }
  }

  clone() {
    return this.#hoox.cloner(this, this.#core)
  }

  /**
   * @param {Name} name 
   * @param {Link} link 
   */

  hook(name, link) {
    switch (name) {
      case hook.cloner: { this.#hoox.cloner = link } break
      case hook.getter: { this.#hoox.getter = link } break
      case hook.setter: { this.#hoox.setter = link } break
    }
  }
}


//#region exports --------------------------------------------------------- *
export { Atom }
//#endregion
