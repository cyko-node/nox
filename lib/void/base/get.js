'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | CORE : GET
 + --- + ---------- */

import { has } from './has'
import { type } from '../util/type'

// ------------------------------------------------------------------------- +

/**
 * @param o The function.
 * @param a The arguments.
 */

function getResult(o, ...a) {
  return o(...a)
}

/**
 * @param o The object.
 * @param k The key.
 * @param d The default value.
 */

function getProperty(o, k, d) {
  return has(o, k) ? o[k] : d
}

/**
 * @param o The object.
 * @param k All or the *enumerable* properties?
 */

function getProperties(o, k = false) {
  if (!k) {
    let tmp = o
    let res = []

    while(tmp !== null) {
      res = res.concat(Object.getOwnPropertyNames(tmp))
      tmp = Object.getPrototypeOf(tmp)
    }

    return res
  } else {
    return Object.getOwnPropertyNames(o)
  }
}

/**
 * @param {*} a The object,
 * @param {*} b The key,
 * @param {*} c The default value,
 *
 * @param {*} a or function.
 * @param {*} b or **true** ? all properties : the enumerable properties.
 * @param {*} c or **true** ? the property result : the property itself.
 * @param {*} d The function arguments.
 */

function get(a, b = false, c = null, ...d) {
  if (a != null) {
    const p = getProperty(a, b, c)

    if (type.of(a).is.callable()) {
      return getResult(a, b, c, ...d)
    } else if (type.of(b).is.boolean() && arguments.length === 3) {
      return getProperties(a, b)
    } else if (type.of(p).is.callable() && c) {
      return getResult(p, ...d)
    } else {
      return p
    }
  } else {
    return a
  }
}

// ------------------------------------------------------------------------- +

export { get }

/* --- + ---------- +
 | NOX | CORE : GET
 + --- + ------------------------------------------------------------------- */
