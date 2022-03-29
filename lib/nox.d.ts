/**
 * **`CYKO` ⵗ {@link nox `NOX`}** - Node Xtensions
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox' {
  
  interface pkgPerson {
    readonly [index: string]: string;

    readonly name: string;
    readonly email?: string;
    readonly url?: string;
  }

  interface pkgRepo {
    readonly type: string;
    readonly url: string;
    readonly directory?: string;
  }

  interface pkg {
    readonly name: string;
    readonly version: string;
    readonly description?: string;
    readonly author?: string | pkgPerson;
    readonly licence?: string;
    readonly homepage?: string;
    readonly repository?: string | pkgRepo;
    readonly maintainers?: (string | pkgPerson)[];
    readonly contributors?: (string | pkgPerson)[];
  }

  interface Type<T> {
    is: {
      array(): boolean;
      boolean(): boolean;
      callable(): boolean;
      number(): boolean;
      object(): boolean;
      string(): boolean;
      symbol(): boolean;
    };

    get name(): string;
  }

  namespace io {
    type encoding = {
      default: string;
      ascii: string;
      base64: string;
      base64url: string;
      binary: string;
      hex: string;
      latin1: string;
      ucs2: string;
      utf8: string;
      utf16le: string;
    }

    interface File {
      get content(): string;
      
      get path(): string;
      get name(): string;
    }
  }

  // ----------------------------------------------------------------------- +
  // MODULE
  // ----------------------------------------------------------------------- +

  interface nox {
    package: pkg;
    pkg: pkg;

    type: {

      /**
       * {@link Type **`type`**} `constructor`
       */

      of<T>(x: T): Type<T>;
    }

    io: {

      encoding: io.encoding;

      /**
       * {@link io.File **`File`**} `constructor`
       */

      read(path: string, encoding?: io.encoding): File;
    }

    /**
     * Determines whether an object contains a certain property.
     *
     * @param o The object.
     * @param k The property name.
     */

    has(o: object, k: string | number | symbol): boolean;

    /**
     * Determines whether an array contains a certain element.
     *
     * @param a The array.
     * @param i The element index.
     */

    has(a: any[], i: number): boolean;

    /**
     * Determines whether an argument has a value (ie defined).
     *
     * ```js
     * example(a, b) { return nox.has(b) }
     * example(1, 2)
     * > true  // defined as: 2.
     * example(1)
     * > false // undefined.
     * example(1, null)
     * > true  // defined as: non-value.
     * example(1, undefined)
     * > false // defined as: undefined.
     * ```
     *
     * @param x The value.
     */

    has(x: any): boolean;

    /**
     * Get the value of a object-property / array-element.
     *
     * Implemented as a conditional-expression...
     *
     * ```js
     * nox.has(o, k) ? o[k] : d
     * ```
     *
     * @param o The object.
     * @param k The property name.
     * @param d The default value = `null`.
     */

    get(o: object, k: string | number | symbol, d?: any): any;

    /**
     * Resolve the value of an object. The result of a function.
     *
     * @param x The object.
     */

    get(x: any): any;

  }

  /**
   * **`CYKO` ⵗ {@link nox `NOX`}** - Node eXtensions
   * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
   */

  var nox: nox;
  export = nox;

}

declare module 'node:nox' {
  import nox = require('nox')
  export = nox;
}
