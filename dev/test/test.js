//import { default as nox } from 'nox'
//import nox from 'cyko:nox'
import * as nox from 'nox'
import { pkg } from 'nox'
function log(...arg) { console.log(...arg) }
function lol() { console.log('----------') }

const p = nox.pkg
const v = nox.version

log('package:', p)
lol()
log('version:', v, `(${v.string()})`)
log()
log('author:', p.author)
