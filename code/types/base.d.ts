/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/base' {
  global {
    export enum platform {
      cross,
      posix,
      windows
    }
  }

  export interface Atom<T> {
    constructor(v: T): Atom<T>;

    get core(): T;
    set core(x: T);
  }
}
