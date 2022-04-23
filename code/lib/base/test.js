import { Atom, hook } from 'nox/base'

var x = new Atom(1)
var o = (...a) => { console.log('out:', ...a) }

function cln(self, core, ...args) {
  o(`cln # ${core}`)
  return new Atom(core)
}
function get(self, data, ...args) {
  o(`get # ${data}`)
}
function set(self, data, core, ...args) {
  o(`set # ${data}`)
  data = 7
  core = 9
  o(`set = ${data}`)
  return data
}

o(x)
o(x.core)

x.hook(hook.cloner, cln)
x.hook('getter', get)
x.hook('setter', get)
x.core = 99
x.hook(hook.setter, set)
x.core = 3
o(x.core)
var y = x.clone()
x.core = 55
o(x.core)
o(y.core)
o(hook.cloner)
