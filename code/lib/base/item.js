/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/base
 * @file item.js
 ** ---------------------------------------------------------- */ 'use strict'

//#region imports ---------------------------------------------------------- *
import { Atom, Code, Relation, Item as Type } from 'nox/base'
//#endregion

/**
 * @template T
 * @implements {Type<T>}
 * @extends {Atom<T>}
 */

class Item extends Atom {
  /* *
   * @type {{
   * prev: Item<any>
   * next: Item<any>
   * }}
   *

  #chain//<{prev|next}>
  */

  /** @type {Type.id}   */#code
  /* ------------------ */
  /** @type {Item<any>} */#prev
  /** @type {Item<any>} */#next

  constructor(x) {
    if (x instanceof Item) {
      super(x)
      this.#code = new Code()
      this.#prev = x.#prev
      this.#next = x.#next
    } else {
      super(x)
      this.#code = new Code()
      this.#prev = this
      this.#next = this
    }
  }

  /**
   * @override
   */

  clone() {
    return new Item(this.core)
  }

  /**
   * @override
   * @template U
   * @param {Item<U>} that 
   */

  swap(that) {
    super.swap(that)

    const a = new Item(this)
    const b = new Item(that)

    that.#prev = a.#prev
    this.#prev = b.#prev
    this.#next = b.#next
    that.#next = a.#next
 
    this.#code.swap(that.#code)

    return that
  }

  /**
   * @template U
   * @param {Item<U>}  that
   * @param {Relation} context
   */

  link(that, context) {
    switch (context) {
      case Relation.prev: {
        this.#prev.#next = that

        that.#prev = this.#prev
        that.#next = this

        this.#prev = that
      } break
      case Relation.next: {
        this.#next.#prev = that

        that.#next = this.#next
        that.#prev = this

        this.#next = that
      } break
    }
  }

  prev() { return this.#prev }
  next() { return this.#next }


  get id() { return this.#code }
}

//#region exports ---------------------------------------------------------- *
export { Item }
//#endregion
