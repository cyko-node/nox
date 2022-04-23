import { Module, initialize } from 'nox/module'
import { Atom } from 'nox/base'

console.log(platform.cross
  )

function log(...arg) { console.log(...arg) }
function lol() { console.log('----------') }

const p = Module.object
const v = Module.version
const x = initialize({ env: 'default' }) //({ env: 'npm_package_json' }) //({ type: nox.initializer.environment })
const y = initialize({ file: './package.json'})
const z = initialize({ object: {} })

log('package[p]:', p.content)
log('package[x]:', x.data)
log('package[y]:', y.data)
log('package[z]:', z.data)

/*
import file from './package.json' assert { type: 'json' }
import * as nox from 'nox'
import { env } from 'process'
import path from 'path'
import { Module, module } from 'nox'


function log(...arg) { console.log(...arg) }
function lol() { console.log('----------') }
/*
lol()
log()
const p = nox.meta.pkg
const v = nox.meta.version
const x = nox.meta.initialize({ env: 'default' }) //({ env: 'npm_package_json' }) //({ type: nox.initializer.environment })
const y = nox.meta.initialize({ file: './package.json'})
const z = nox.meta.initialize({ object: file })


log('package[p]:', p.data)
log('package[x]:', x.data)
log('package[y]:', y.data)
log('package[z]:', z.data)

lol()
log('version:', v.name, `(${v.string()})`)
log()
log('author:', p.author.data)
log()
lol()
lol()
log('package:', x.data)
lol()
log('version:', x.version.name, `(${x.version.string()})`)
log()
log('author:', x.author.data)
log(env)
const ev = env['npm_package_json']
log(ev)
log(path.dirname(ev))
lol()
log(Module.name)
log(Module.version)
*/
