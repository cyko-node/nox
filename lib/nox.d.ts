/**
 * **`CYKO` ⵗ {@link nox `NOX`}** - Node Xtensions
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox' {

  //declare namespace nox {
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

  /**
   * The **package.json** data.
   */

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
  //}

  interface is {
    array(): boolean;
    boolean(): boolean;
    callable(): boolean;
    number(): boolean;
    object(): boolean;
    string(): boolean;
    symbol(): boolean;
  }

  interface type {
    of(x: any): type;
    
    is: is;

    name: string;
  }

  //namespace nox { }
  interface nox {

    type: type;

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

    /**
     * Convert values of any type to a **string**.
     *
     * Accepts multiple arguments. In which case the returned string will
     * contain each argument, separated with a space ( in passed order ).
     *
     * @param x The value.
     * @param a The additional values.
     */

    string(x: any, ...a: any[]): string;

    number(x: any, integral: bool): number;
    int(x: any): number;
  }

  /**
   * **`CYKO` ⵗ {@link nox `NOX`}** - Node eXtensions
   *
   * + Object utilities
   * + Type conversations
   *
   * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
   */

  var nox: nox;
  export = nox;

}
/*
declare module 'cyko:nox' {
  import nox = require('nox');
  export = nox;
}
*/
