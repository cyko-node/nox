import { Atom, hook } from 'nox/base'


var x = new Atom(1)
var o = (...a) => { console.log('out:', ...a) }

/**
 * @param {Atom} self 
 * @param {*} core 
 * @param {...any} args 
 */
function cln(self, core, ...args) {
  o(`cln # ${core}`)
  return new Atom(core)
}
/**
 * @param {Atom} self 
 * @param {*} data 
 * @param {...any} args 
 */
function get(self, data, ...args) {
  o(`get # ${data}`)
  o(`get @ ${self.core}`)
}
/**
 * @param {Atom} self 
 * @param {*} data 
 * @param {*} core 
 * @param {...any} args 
 */
function set(self, data, core, ...args) {
  o(`set # ${data}`)
  o(`set = ${data}`, ':', core)
  self.core = 1988
  self.core = 2022
  return data
}


o(x)
o(x.core)
x.hook(hook.cloner, cln)
x.hook('getter', get)
x.hook(hook.setter, set)
x.core = 99
x.core = 3
o('------------')
o(':', x.core)
o('------------')

import { Platform } from 'nox/core'

o(Platform.Name.aix)
