'use strict'
/* ------------------------------------------------------------------------- +
 | NOX | CORE : HAS
 + --- + ---------- */

import { type } from '../util/index.js'

// ------------------------------------------------------------------------- +

/**
 * @param o The value.
 */

function hasValue(o) {
  return o !== undefined
}

/**
 * @param  o  The array.
 * @param  k  The index or key.
 * @param [l] The index of the last element **r/o**.
 * @param [x] The index or key ( corrected ) **r/o**.
 */

function hasElement(o, k, l = (o.length - 1), x = (k === -1 ? l : k)) {
  return hasProperty(o, x) || Array.prototype.includes.call(o, k)
}

/**
 * @param o The object.
 * @param k The key.
 */

function hasProperty(o, k) {
  return Object.prototype.hasOwnProperty.call(o || {}, k)
}

/**
 * Has object property, array element, or a defined value?
 *
 * @param o The object,
 * @param k The key,
 *
 * @param o array,
 * @param k index.
 *
 * @param o or value.
 * @param k or leave **undefined** ( in case of value determination ).
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
 * Has argument?  
 * ie argument has a defined value?
 * 
 * @param x The argument / value.
 */

function arg(x) {
  return hasValue(x)
}


// ------------------------------------------------------------------------- +

export { has, arg }

/* --- + ---------- +
 | NOX | CORE : HAS
 + --- + ------------------------------------------------------------------- */
