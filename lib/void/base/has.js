'use strict'
/* ------------------------------------------------------------------------- +
 | NOX | CORE : HAS
 + --- + ---------- */

import { type } from '../util/type'
import * as x from 'nox/get'
import * as g from 'nox'

// ------------------------------------------------------------------------- +

/**
 * @param o The value.
 * @returns {boolean} true / false.
 */

function hasValue(o) {
  return o !== undefined
}

/**
 * @param o The array.
 * @param k The index or key.
 * @returns {boolean} true / false.
 */

function hasElement(o, k) {
  const x = k === -1 ? (o.length - 1) : k
  return hasProperty(o, x) || Array.prototype.includes.call(o, k)
}

/**
 * @param o The object.
 * @param k The key.
 * @returns {boolean} true / false.
 */

function hasProperty(o, k) {
  return Object.prototype.hasOwnProperty.call(o || {}, k)
}

/**
 * + Object has property?
 * + Array has element?
 * + Value has definition?
 *
 * @param o The object, array, or value.
 * @param k The key or index.
 */

function has(o, k) {
  if (!hasValue(k)) {
    return hasValue(o)
  } else if (type.of(o).is.array()) {
    return hasElement(o, k)
  } else {
    return hasProperty(o, k)
  }
}

/**
 * @private for internal use.
 */

const imp = {
  has: {
    property: hasProperty,
    element: hasElement,
    value: hasValue
  }
}

// ------------------------------------------------------------------------- +

export { has, imp }

/* --- + ---------- +
 | NOX | CORE : HAS
 + --- + ------------------------------------------------------------------- */
