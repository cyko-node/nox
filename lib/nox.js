'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | INDEX
 + --- + ----- */

export { default as pkg } from '../package.json' assert { type: 'json' }

console.log('x')
export * from './core' //index.js'
console.log('y')
export * from './util' //index.js'
console.log('z')
/* --- + ----- +
 | NOX | INDEX
 + --- + ------------------------------------------------------------------- */
