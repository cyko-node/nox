/**
 * Cyko: **N**ode **O**bjective e**X**tensions
 *
 * ---
 *
 * Collection of simple and safe objective utilities.
 *
 * - Object property queries
 * - Object property access
 *
 * - Value conversions
 *
 * ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module "nox" {

  /**
   * Objective representation of the **package.json** contents.
   *
   * ```
   * // object structure
   * interface example {
   *   name: string;
   *   version: string;
   *   description: string;
   *   main: string;
   *   private: boolean;
   *   keywords: string[ ... ];
   *   license: string;
   *   author: string|person;
   *   scripts: { ...; };
   *   dependencies: { ...; };
   *   repository: { type: string; url: string; };
   *   maintainers: [ string|person, ... ];
   *   contributors: [ string|person, ... ];
   * }
   * // author, maintainers, contributors
   * interface person { name: string; email: string; }
   * ```
   */

  function package(): object

  /* ----------------------------------------------------------------------- */

  /**
   * `object` has a property with the specified `name` ?
   *
   * ---
   *
   * @param obj `object`
   * @param key `name`
   */

  function has(obj: object, key: string): boolean

  /**
   * `object` has a functional property (method) with the specified `name` ?
   *
   * ---
   *
   * @param obj `object`
   * @param key `name`
   */

  function fas(obj: object, key: string): boolean

  /**
   * Get the `object` property `name`.
   *
   * ---
   *
   * Selects between `object[name]` and `default` based upon weather the
   * `object` {@link has has} a property with the specified `name`.
   *
   * ---
   *
   * @param obj `object`
   * @param key `name`
   * @param def `default` = `null`
   */

  function get(obj: object, key: string, def: any = null): any

  /* ----------------------------------------------------------------------- */

  /**
   * Convert a `value` of *any* type to a **string**.
   *
   * ---
   *
   * @param val `value`
   */

  function string(val: any): string

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
   * ---
   *
   * @param val `value`
   */

  function int(val: any): number

}
