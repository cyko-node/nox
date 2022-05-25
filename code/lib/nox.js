/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * -----
 * @path cyko:nox (main)
 * @file nox.js
 * -----
 * Package entry.
 ** ---------------------------------------------------------- */ 'use strict'
/*
export * as util from 'nox/util'
export * from 'nox/base'
export * from 'nox/fs'
export * from 'nox/module' //'./module/index.js'
*/

function mesg(...args) { console.log(...args) }
function line() { mesg('-----------') }
function feed() { mesg() }

function round(n, abs = true) {
  if (typeof n === 'number')
  {
    /**
     * Math.round returns the nearest integer as follows:
     *
     * ```js
     * Math.round(+0.5) > 1
     * Math.round(-0.5) > 0 // want -1
     * ```
     *
     * Workaround:
     * Round the absolute ( posetive ) value of the number.
     * Return as negative or posetive ( according to the original value ).
     */

    if (abs) {
      const x = Math.round(Math.abs(n))
      return n < 0 ? -x : x
    } else {
      return Math.round(n)
    }
  } else {
    throw new Error('NaN')
  }
}

import { Atom, Item, Rank, Relation } from 'nox/base'
/*
var r = new Rank(1)
const rmsg = (...args) => { mesg('rank :', ...args) }
rmsg('num :', r.core)
rmsg('num :', r.core)

var list = [
  new Rank(0),
  new Rank(1),
  new Rank(2),
  new Atom('a'),
  new Atom('b'),
  new Atom('c'),
]
*/
var a = new Item(1)
var b = new Item('b')
var c = new Item(3)
var d = new Item('d')

a.link(b, Relation.next)
b.link(c, Relation.next)
c.link(d, Relation.next)

let i = a
do {
  mesg('core:', i.core)
  mesg('code:', i.id)
  line()
  i = i.next()
} while (!i.id.equals(a.id))
mesg()
mesg()
for (let x = a; !x.id.equals(a.id); x = x.next()) {
  mesg('core:', x.core)
  mesg('code:', x.id)
  line()
}
mesg('item< a >prev:', a.prev().core)
mesg('item< a >self:', a.core)
mesg('item< a >next:', a.next().core)
line()
mesg('item< b >prev:', b.prev().core)
mesg('item< b >self:', b.core)
mesg('item< b >next:', b.next().core)
line()
mesg('item< c >prev:', c.prev().core)
mesg('item< c >self:', c.core)
mesg('item< c >next:', c.next().core)
line()
mesg('item< d >prev:', d.prev().core)
mesg('item< d >self:', d.core)
mesg('item< d >next:', d.next().core)
mesg('item< d >next->prev:', d.next().prev().core)
mesg('item< d >next->self:', d.next().core)
mesg('item< d >next->next:', d.next().next().core)

function lest(...x) {
  x.forEach(a => {
    mesg(`${
      a.prev().prev().prev().prev().prev().core
    } <<<<< ${
      a.prev().prev().prev().prev().core
    } <<<< ${
      a.prev().prev().prev().core
    } <<< ${
      a.prev().prev().core
    } << ${
      a.prev().core
    } < ${a.core} > ${
      a.next().core
    } >> ${
      a.next().next().core
    } >>> ${
      a.next().next().next().core
    } >>>> ${
      a.next().next().next().next().core
    } >>>>> ${
      a.next().next().next().next().next().core
    }`)
  })
}
b.swap(c)
lest(a, b, c, d)
/*
import { Module } from 'nox/module' //'./module/index.js'
mesg(Module.object.content)



















import { Path, File } from 'nox/fs'
import { cwd } from 'process'

mesg(cwd())
;
[
  '/cyko/nox/file.js',
  '/cyko/nox/file.',
  '/cyko/nox/file',
  '/cyko/nox/.',
  '/cyko/nox/',
  '/cyko/nox',
  '/.',
  '/',
  '.',
//'', // error (empty string)
  '\\home\\x/package.json',
  'package.json',
  'lib',
  cwd(),
].forEach((e) => {
  const p = new Path(e)
  mesg('norm:', p.normalize(false))
  mesg('data:', p.data)
  mesg('name:', p.name)
  mesg('base:', p.base)
  line()
})
;
[
  'package.json',
  'package.',
  'package',
  'package.json.bak',
  'package.json.',
].forEach((e) => {
  const f = new File(e)
  mesg('path:', f.path)
  mesg('name:', f.name)
  mesg('type:', f.type)
  line()
})
*/
