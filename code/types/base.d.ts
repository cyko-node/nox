/**
 * @example <caption>**`NODE`** `EJS`</caption>
 * // import as namespace
 * import * as base from 'nox/base'
 * import { base } from 'nox'
 * // import named export
 * import { x } from 'nox/base'
 * // import named export ( dynamic )
 * const { x: x } = await import('nox/base')
 * @example <caption>**`NODE`** `CJS`</caption>
 * const base = require('node:nox/base')
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/base' {
  interface Valuable<T> extends type.callable<T, 'value'> {} //extends type.member<'value', T, true> {}

  interface Toggable extends Valuable<boolean> {
    toggle(): boolean;
    on(): boolean;
    off(): boolean;
    status(): boolean;
  }

  class Link {
    
  }

  // ---------------------------------------------------------------------- *

  namespace Hook {
    type Name = 'getter' | 'setter' | 'cloner';
    type Link<T, R = any> = (self: T, ...args: any[]) => R;
  }

  type hook = {
    [K in Hook.Name]: K;
  };

  const hook: hook;

  // ---------------------------------------------------------------------- *



  interface Clonable<T> {

    /**
     * Constructs an identical ( deep ) copy of this object.
     *
     * *Implementations may vary.*
     */

    clone(): T;
  }

  interface Hookable<T> {

    /**
     * Bind a function ( link ) to a method ( hook ).
     *
     * *Implementations may vary.*
     *
     * @param name The `hook` name.
     * @param link The `link` function.
     */

    hook(name: Hook.Name, link: Hook.Link<T>): void;
  }

  // ---------------------------------------------------------------------- *

  class Atom<T> implements Clonable<Atom<T>>, Hookable<Atom<T>> {
    constructor(v: T);

    get core(): T;
    set core(v: T);

    /**
     * @returns A new {@linkcode Atom} with an identical core.
     */

    clone(): Atom<T>;
    hook(name: Hook.Name, link: Hook.Link<Atom<T>>): void;
  }

}
