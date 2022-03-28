/**
 * **`CYKO` ⵗ {@link nox `NOX`}** - Node Xtensions
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox' {

  interface packagePerson {
    readonly name: string;
    readonly email?: string;
    readonly url?: string;
  }

  interface packageRepo {
    readonly type: string;
    readonly url: string;
    readonly directory?: string;
  }

  interface packageData {
    readonly name: string;
    readonly version: string;
    readonly description?: string;
    readonly author?: string | packagePerson;
    readonly licence?: string;
    readonly homepage?: string;
    readonly repository?: string | packageRepo;
    readonly maintainers?: (string | packagePerson)[];
    readonly contributors?: (string | packagePerson)[];
  }

  interface type<T> {
    of(x: T): type<T>;

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

  /*
  enum fileEncodings {
    ascii     = 'ascii',
    base64    = 'base64',
    base64url = 'base64url',
    binary    = 'binary',
    hex       = 'hex',
    latin1    = 'latin1',
    latin     = 'latin1',
    ucs2      = 'ucs2',
    utf8      = 'utf8', 
    utf16le   = 'utf16le',
    default   = 'utf8'
  }

  type fileEncoding = {
    [key in fileEncodings]: string;
  }
  */
  type fileEncoding = {
    readonly ascii: string;
    readonly base64: string;
    readonly base64url: string;
    readonly binary: string;
    readonly hex: string;
    readonly latin1: string;
    readonly latin: string;
    readonly ucs2: string;
    readonly utf8: string;
    readonly utf16le: string;
    readonly default: string;
  }

  interface file {

    /**
     * encodings.
     */

    readonly encoding: fileEncoding;

    /**
     * Constructs a `file` object.
     */

    read(path: string, encoding?: fileEncoding): file;

    get data(): string;
    get path(): string;
    get name(): string;
  }

  //namespace nox { }
  interface nox {

    type: type<any>;
    file: file;

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
/*
declare module 'node:nox' {
  import nox = require('nox')
  export = nox;
}
*/
