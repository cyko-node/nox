import file from './package.json' assert { type: 'json' }
import * as nox from 'nox'


function log(...arg) { console.log(...arg) }
function lol() { console.log('----------') }

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
