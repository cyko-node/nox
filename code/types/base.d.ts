/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/base' {

  import { unique as util_unique } from 'nox/util/misc'

 /*
  +------------------------------------------------------------------------- *
  | Interfaces (Abstract models)
  +------------------------------------------------------------------------- *
  */

  interface Toggable {
    toggle(): boolean;
    on(): boolean;
    off(): boolean;
    status(): boolean;
  }

/*

  interface type {
    is: {
      vector(): boolean;
      boolean(): boolean;
      callable(): boolean;
      number(): boolean;
      string(): boolean;
      struct(): boolean;
      symbol(): boolean;
    }
  }

  namespace type {
    function of(v: any): type;
  }
*/

  namespace core {
    function of<T extends Valuable<T>>(o: T): T['core'];
  }

  interface Valuable<T> {
    /**
     * The encapsulated data ( value ).
     */

    core: T;
  }

  interface Comparable<T> {
    /**
     * Compares this and another *Comparable* object.  
     * Compares properties that represents some sort of primitive value.
     *
     * @param o The object.
     */

    equals<U>(o: Comparable<U>): boolean;
  }

  interface Clonable<T> {
    /**
     * Returns an identical deep-copy of this object.
     */

    clone(): Clonable<T>;
  }

  interface Swappable<T> {
    /**
     * Swaps the contents of this and another *Swappable* object.  
     * Returns the passed ( swapped ) object.
     *
     * @param o The object.
     */

    swap<U>(o: Swappable<U>): Swappable<T>;
    swap<T>(o: Swappable<T>): Swappable<T>;
  }


 /*
  +------------------------------------------------------------------------- *
  | ATOM
  +------------------------------------------------------------------------- *
  */

  /**
   * The Atomic concept.
   *
   * Provides a common base for valuable objects.  
   * Valuable, as in representing some sort of data ( `core` ).
   */

  interface Atom<T> extends Valuable<T>,
    Clonable  <T>,
    Comparable<T>,
    Swappable <T> {
    swap<U>(o: Atom<U>): Atom<T>;
    swap<T>(o: Atom<T>): Atom<T>;
  }

  namespace Atom {
    interface Constructor {
      new<T>(x?: T | Atom<T>): Atom<T>;
    }
  }

  const Atom: Atom.Constructor;
//class Atom<T> implements Atom<T> { constructor(x?: T | Atom<T>) }

 /*
  +------------------------------------------------------------------------- *
  | ITEM
  +------------------------------------------------------------------------- *
  */

  interface Referable<T> {
    readonly index: T;
  }


  interface Relatable<T> {
    /**
     * Returns the previous *Relatable* object ( in relation to this ).  
     * Returns itself when there is no relation.
     */

    prev(): Relatable<T>;

    /**
     * Returns the next object, in relation to this context.  
     * Returns itself when there is no relation.
     */

    next(): Relatable<T>;
  }

  enum Relation {
    prev = 'prev',
    next = 'next',
  }

  /**
   * The Item / Container concept.
   *
   * The Item builds upon the Atom.  
   * Provides a comon base for list-like ( container ) elements / records.
   */

  interface Item<T> extends Atom<T>,
    Relatable<T> {
    prev<U>(): Item<U>;
    next<U>(): Item<U>;

    next<U>(o: Item<U>): Item<U>
    link<U>(o: Item<U>, context: Relation): void;

    readonly id: Item.id;
  }

  namespace Item {
    type id    = Code;
    type index = Rank;

    interface Constructor {
      new<T>(v?: T | Item<T>): Item<T>;
    //new<T>(o: Item<T>): Item<T>;
    }
  }

  const Item: Item.Constructor;

 /*
  +------------------------------------------------------------------------- *
  | RANK
  +------------------------------------------------------------------------- *
  */

  type Wrap<T, Constant extends meta.attribute>
    = Constant extends meta.attribute.constant
    ? { readonly core: T; }
    : { core: T; };
  
  interface A<T> extends Wrap<T, meta.attribute.constant> {

  }

  interface Rank extends Atom<Rank.core> {
    /**
     * The value : `integer`
     */

    readonly core: Rank.core;
  }

  namespace Rank {
    type core = number;

    interface Constructor {
      readonly DEFAULT_DIF: Rank.core;
      readonly DEFAULT_MIN: Rank.core;
      readonly DEFAULT_MAX: Rank.core;

      new(x?: Rank | Rank.core): Rank;

      prev(o: Rank): Rank;
      next(o: Rank): Rank;
    }
  }

  const Rank: Rank.Constructor;

 /*
  +------------------------------------------------------------------------- *
  | CODE
  +------------------------------------------------------------------------- *
  */

  interface Code extends Atom<Code.core> {
    /**
     * Disabled. Throws an Error!
     * @override
     */

    clone(): Code;

    /**
     * The value : `constant`|`unique`
     */

    readonly core: Code.core;
  }
  
  namespace Code {
    type core = meta.type.of<typeof util_unique>;

    interface Constructor {
      new(): Code;
    }
  }

  const Code: Code.Constructor;

  function overload<T>(o: Atom<T>, name: string, func: symbol): void;
}
