/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/util/type
 * @file index.js
 * -----
 * namespace type
 ** ---------------------------------------------------------- */ 'use strict'

import { Type } from './type.js'
import { name } from './name.js'

const typ = {
  of(x) {
    return new Type(x)
  }
}

const type = Object.create(name, {
  of: {
    configurable: false,
    enumerable: true,
    value(x) { return new Type(x) }
  }
})

for (const k in name) {
  Object.defineProperty(type, k, {
    configurable: false,
    enumerable: true,
    get() { return name[k] }
  })
}

console.log('blah:', type.of(1).name)
console.log('blah:', type.of(null).name)

export { type }
export { name }
