/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * -----
 * @path cyko:nox (main)
 * @file nox.js
 * -----
 * Package entry.
 ** ---------------------------------------------------------- */ 'use strict'

function mesg(...args) { console.log(...args) }
function line() { mesg('-----------') }
function feed() { mesg() }


import { Module } from 'nox/module' //'./module/index.js'

mesg(Module.object.content)


export * from 'nox/module' //'./module/index.js'

















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
