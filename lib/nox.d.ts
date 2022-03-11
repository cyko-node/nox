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
   * Convert `value` of any type to a **string**.
   *
   * @param val `value`
   */

  function string(val: any[]): string;

  /**
   * Convert a `value` of *any* type to an **integer**.
   *
   * ```
   * nox.int('abc')      //  NaN
   * nox.int('123abc')   //  NaN
   * nox.int('123')      //  123
   * nox.int('-321')     // -321
   * nox.int('123.321')  //  123
   * nox.int('Infinity') //  Infinity
   * ```
   *
   * @param val `value`
   */

  function int(val: any): number;


  declare namespace to {
    function string(val: any[]): string;
    function int(val: any | any[]): number;
  };

  declare namespace is {
    function array(val: any): boolean;
    function boolean(val: any): boolean;
    function method(val: any): boolean;
    function number(val: any): boolean;
    function object(val: any): boolean;
    function string(val: any): boolean;
  };

};
