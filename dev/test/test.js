const nox = require('nox')
const pkg = nox.package()

/**
 * Test: helpers...
 */

class C {
  v = 0
  f() {}
}

const c = new C
const o = {
  v: 1,
  f: function() {}
}

/**
 * Test: configurations
 */

const cfg = {
  int: {
    info: 'convert to <number(integral)>',
    name: 'int',
    func: nox.to.int,
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
  has: {
    info: 'object has property?',
    name: 'has',
    func: nox.has,
    args: [
      [ { }, 'f' ],
      [ { f: null }, 'f' ],
      [ { f: 1 }, 'f' ],
      [ { f: function() {} }, 'f' ],
      [ C, 'f' ],
      [ c, 'f' ],
      [ o, 'f' ]
    ]
  },
  isarray: {
    info: 'object is array?',
    name: 'is.array',
    func: nox.is.array,
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
  }
}

/**
 * Test: command-line number.
 */

const cmd = {
  1: {
    info: 'functionality (basics)',
    test: [
      'has',
      'int',
      'isarray'
    ],
  }
}

console.log('n()', nox.is.n())
console.log('n(null)', nox.is.n(null))
console.log('n(1)', nox.is.n(1))
console.log('u()', nox.is.u())
console.log('u(null)', nox.is.u(null))
console.log('u(1)', nox.is.u(1))
console.log('v()', nox.is.v())
console.log('v(null)', nox.is.v(null))
console.log('v(1)', nox.is.v(1))
console.log('string(1)', nox.to.string(1))

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
