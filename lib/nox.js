/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * -----
 * @path cyko:nox (main)
 * @file nox.js
 * -----
 * Package entry.
 ** ---------------------------------------------------------- */ 'use strict'

import { Module } from './module/index.js'

function log(...args) { console.log(...args) }

log(Module.data.content)
export * from './module/index.js'
//import * as main from './meta/index.js'
//export * from './meta/index.js'
