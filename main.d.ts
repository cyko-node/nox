/*
 * Cyko: **N**ode **O**bjective e**X**tensions
 *
 * ---
 *
 * Collection of simple and _safe_ object utilities.
 *
 * - Property queries
 * - Property access
 *
 * ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module "nox..." {

  /**
   * `object` has a **property** with the specified `name` ?
   *
   * ---
   *
   * @param obj `object`
   * @param key `name`
   */

  function has(obj: object, key: string): boolean

  /**
   * `object` has a **method** with the specified `name` ?
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
   * Selects `object['name']` or `default` based upon weather the `object`
   * {@link has has} a property with the specified `name`.
   *
   * ---
   *
   * @param obj `object`
   * @param key `name`
   * @param def `default` = `null`
   */

  function get(obj: object, key: string, def: any): any

}
