/**
 * **Cyko** `nox` Node eXtensions
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox' {

  interface nox {

    /**
     * Get an objective representation of the **package.json** contents.
     */

    package(): object;

    // ---------------------------------------------------------------------- +

    /**
     * Determines whether an `object` includes a certain `property`.
     *
     * @param obj The `object` to search.
     * @param key The `property` to search for.
     */

    has(obj: object, key: string | number): boolean;

    /**
     * Get the `object` property `name`.
     *
     * Selects between `object[name]` and `default` based upon weather the
     * `object` {@link has has} a property with the specified `name`.
     *
     * @param obj `object`
     * @param key `name`
     * @param def `default` = `null`
     */

    get(obj: object, key: string, def?: any): any;

    /**
     * Convert a `value` of *any* type to a **string**.
     *
     * Accepts multiple arguments. In which case the returned string will
     * contain each argument, separated with a space ( in passed order ).
     *
     * @param val `value` to convert.
     * @param arg `value`... ( rest ).
     */

    string(val: any, ...arg: any[]): string;

    /**
     * Convert a `value` of *any* type to an **integer**.
     *
     * ```js
     * nox.int('abc')
     * > NaN
     * nox.int('123abc')
     * > NaN
     * nox.int('123')
     * > 123
     * nox.int('-321')
     * > -321
     * nox.int('123.321')
     * > 123
     * nox.int('Infinity')
     * > Infinity
     * ```
     *
     * @param val `value` to convert.
     */

    int(val: any | any[]): number;
  }

  /**
   * **Cyko** `nox` Node eXtensions
   *
   * + Object queries
   * + Type conversations
   *
   * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
   */

  declare const nox: nox;
  export = nox;
}


  // ------------------------------------------------------------------------ +

  /**
   * TESTING REQUIRED!
   */
/*
  namespace to {

    /**
     * Convert a `value` of *any* type to a **string**.
     *
     * Accepts multiple arguments. In which case the returned string will
     * contain each argument, separated with a space ( in passed order ).
     *
     * @param val `value` to convert.
     * @param arg Additional `value(s)`.
     *

    function string(val: any, ...arg: any[]): string;


  }

  /**
   * TESTING REQUIRED!
   *

  namespace is {

    function array(val: any): boolean;
    function boolean(val: any): boolean;
    function method(val: any): boolean;
    function number(val: any): boolean;
    function object(val: any): boolean;
    function string(val: any): boolean;

    function n(val: any): boolean;
    function u(val: any): boolean;
    function v(val: any): boolean;
    function x(val: any): boolean;

  }

}
*/
