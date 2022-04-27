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
  namespace Hook {
    type Name = 'cloner' | 'getter' | 'setter';
    type Link<O, R = any> = (self: O, ...args: any[]) => R;

    type Impl = { [K in Name]: `hook:${K}`; };
  }

  interface hook {
    cloner: Hook.Name;
    getter: Hook.Name;
    setter: Hook.Name;
  }

  const hook: hook

  // ---------------------------------------------------------------------- *

  type False = boolean;
  type True = boolean;

  type Valuable<T, F extends True | False> = F extends True
    ? {
      get core(): T;
      //set core(v: T);
    }
    : {
      core: T;
    };

  class Base<T> implements Valuable<T, false> {
    get cotre(): T;
    set core(v: T);
  }

  interface Clonable<O, T> {//extends Valuable<T> {

    /**
     * Constructs an identical ( deep ) copy of this object.
     *
     * *Implementations may vary.*
     */

    clone(): O;
  }

  type Hookable<O> = {

    /**
     * Bind a function ( link ) to a method ( hook ).
     *
     * *Implementations may vary.*
     *
     * @param name The `hook` name.
     * @param link The `link` function.
     */

    hook(name: Hook.Name, link: Hook.Link<O>): void;
  };

  // ---------------------------------------------------------------------- *

  class Atom<T> implements Clonable<Atom<T>, T>, Hookable<Atom<T>> {
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
