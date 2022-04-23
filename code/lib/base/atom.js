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
   * @typedef {Hook.Link<Atom<T>>} Link `Cloner` | `Getter` | `Setter`
   * @typedef {Hook.Name} Name
   */

  /**
   * The encapsulated data.
   * @type {T}
   */

  #core
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
    this.#hoox.getter(this, this.#core)
    return this.#core
  }

  set core(/** @type {T} */v) {
    this.#core = this.#hoox.setter(this, v, this.#core)
    return// void
  }

  clone() {
    return this.#hoox.cloner(this, this.#core)
  }

  hook(/** @type {Name} */name, /** @type {Link} */link) {
    if (typeof link === 'function') {
      switch (name) {
        case hook.cloner: { this.#hoox.cloner = link } break
        case hook.getter: { this.#hoox.getter = link } break
        case hook.setter: { this.#hoox.setter = link } break
        default: { throw new Error(`Core: unknown hook (${name}).`) }
      }
    } else {
      throw new Error(`Core: cannot hook onto non-functional link.`)
    }
  }
}



//#region exports --------------------------------------------------------- *
export { Atom }
//#endregion
