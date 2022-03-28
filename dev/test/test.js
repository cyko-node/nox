//import { default as nox } from 'nox'
//import nox from 'cyko:nox'
import * as nox from 'nox'

const pkg = nox.pkg

console.log(nox.file.encoding.latin1)
console.log(nox.file.encodings.ascii)
console.log(nox.file.encoding.valueOf())
console.log(nox.file.encoding.valueOf())

/**
 * Test: configurations
 */

const cfg = {
  isclass: {
    info: 'is objective/class?',
    name: 'is.objective',
    func: nox,
    args: [
      [ ],
      [ null ],
      [ [] ],
      [ {} ],
    ]
  },
  has: {
    info: 'object has property?',
    name: 'has',
    func: nox.has,
    args: [
      [ [ ' +----------+ ' ] ],
      [ [ ' | defined? | ' ] ],
      [ [ ' +----------+ ' ] ],
      [ ],
      [ null ],
      [ undefined ],
      [ 1 ],
      [ 'a' ],
      [ [] ],
      [ {} ],

      [ [ ' +----------------+ ' ] ],
      [ [ ' | array element? | ' ] ],
      [ [ ' +----------------+ ' ] ],
      [ [ ], 0 ],
      [ [ ], 1 ],
      [ [ ], -1 ],
      [ [ 'a' ], 0 ],
      [ [ 'a' ], 1 ],
      [ [ 'a' ], -1 ],
      [ [ null ], null ],
      [ [ null ], 0 ],
      [ [ null ], 1 ],
      [ [ null ], -1 ],
      [ [ undefined ], 0 ],
      [ [ undefined ], 1 ],
      [ [ undefined ], -1 ],
      [ [ 'a', 'b' ], 0 ],
      [ [ 'a', 'b' ], 1 ],
      [ [ 'a', 'b' ], 2 ],
      [ [ 'a', 'b' ], -1 ],
      [ [ 'a', null, 'b' ], 0 ],
      [ [ 'a', null, 'b' ], 1 ],
      [ [ 'a', null, 'b' ], 2 ],
      [ [ 'a', null, 'b' ], -1 ],
      [ [ 'a', undefined, 'b' ], 0 ],
      [ [ 'a', undefined, 'b' ], 1 ],
      [ [ 'a', undefined, 'b' ], 2 ],
      [ [ 'a', undefined, 'b' ], -1 ],
      [ [ 'a' ], 'a' ],

      [ [ ' +------------------+ ' ] ],
      [ [ ' | object property? | ' ] ],
      [ [ ' +------------------+ ' ] ],
      [ { }, 'x' ],
      [ { x: null }, 'x' ],
      [ { x: 1 }, 'x' ],
      [ { f: function() {} }, 'f' ],
      [ { f() {} }, 'f' ],
    ]
  },
  string: {
    info: 'convert to <string>',
    name: 'string',
    func: nox.string,
    args: [
      [ '' ],
      [ '123' ],
      [ 'abc' ],
      [ '123abc' ],
      [ '-321' ],
      [ '123.321' ],
      [ '-321.123' ],
      [ '12345678901' ],
      [ '1234567890123456789' ],
      [ [] ],
      [ [ 1 ] ],
      [ [ 1, 2 ] ],
      [ [ 1, 2, 3 ] ],
      [ [ 3 ] ],
      [ [ 'a' ] ],
      [ [ '1' ] ],
      [ [ '3'] ],
      [ 3, '2' ],
      [ 123 ],
    ],
  },
  int: {
    info: 'convert to <number(integral)>',
    name: 'int',
    func: nox.number,
    args: [
      [ ],
      [ '' ],
      [ '123' ],
      [ 'abc' ],
      [ '123abc' ],
      [ '-321' ],
      [ '123.321' ],
      [ '-321.123' ],
      [ '12345678901' ],
      [ '1234567890123456789' ],
      [ null ],
      [ undefined ],
      [ [] ],
      [ [ 2 ] ],
      [ [ 2, 3 ] ],
      [ [ 'a', 2 ] ],
      [ [ 3 ] ],
      [ [ 'a' ] ],
      [ [ '1' ] ],
      [ [ '3'] ],
      [ 3, '2' ],
      [ 123 ],
    ],
  },
  isarray: {
    info: 'object is array?',
    name: 'is.array',
    func: nox,
    args: [
      [ ],
      [ null ],
      [ 1 ],
      [ 'c' ],
      [ {} ],
      [ { x: 1 } ],
      [ { a: [] } ],
      [ 1, 'c' ],
      [ [] ],
      [ [ null ] ],
      [ [ 'x', 1 ] ],
      [ [ [] ] ],
    ]
  },
}

/**
 * Test: command-line number.
 */

const cmd = {
  1: {
    info: 'functionality (basics)',
    test: [
      'has',
      //'isclass',
      //'int',
      //'string',
    ],
  }
}

const num = process.argv.includes('test', 2)
  ? Number(process.argv.at(3))
  : false

if (num) {
  const out = console.debug

  switch (num) {
    case 1||2||3||4||5||6||7||8||9: {
      out(`@ ${pkg.name}:test[${num}]`, cmd[num].info, '...')
      out()

      cmd[num].test.forEach((fun) => {
        out()
        out('#', cfg[fun].info)
        out('> ---------')
        cfg[fun].args.forEach((arg) => {
          out(`> ${pkg.name}.${cfg[fun].name}(`, ...arg, '):', cfg[fun].func(...arg))
        })
      })

      out()
      out(`@ ${pkg.name}:test[${num}] done.`)
    } break

    default: {
      console.error(`@ ${pkg.name}:test[${num}] unknown!`)
    } break
  }
}
