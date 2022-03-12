/**
 * Cyko - **No**de e**X**tensions
 *
 * > ---
 *
 * Collection of simple and safe utilities.
 *
 * + Object property queries
 * + Object property access
 *
 * > ---
 *
 * + Data conversion
 * + Type properties
 *
 * ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox' {

  /**
   * Get an objective representation of the **package.json** contents.
   *
   * ```
   * interface example {
   *   name: string;
   *   version: string;
   *   description: string;
   *   keywords: string[ ... ];
   *   license: string;
   *   author: string | { name: string; email: string; };
   *   config: { ...; };
   *   scripts: { ...; };
   *   dependencies: { ...; };
   *   repository: { type: string; url: string; };
   * };
   * ```
   */

  function package(): object;

  /* ----------------------------------------------------------------------- */

  /**
   * Determines whether an `object` includes a certain `property`.
   *
   * @param obj The `object` to search.
   * @param key The `property` to search for.
   */

  function has(obj: object, key: string | number): boolean;

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

  function get(obj: object, key: string, def?: any): any;

  /* ----------------------------------------------------------------------- */

  /**
   * TESTING REQUIRED!
   */

  declare namespace to {

    /**
     * Convert a `value` of *any* type to a **string**.
     *
     * Accepts multiple arguments. In which case the returned string will
     * contain each argument, separated with a space ( in passed order ).
     *
     * @param val `value` to convert.
     * @param arg Additional `value(s)`.
     */

    function string(val: any, ...arg: any[]): string;

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

    function int(val: any | any[]): number;

  };

  /**
   * TESTING REQUIRED!
   */

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

  };

};
