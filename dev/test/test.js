
/**
 * Test: configurations
 */

const cfg = {
  int: {
    info: 'convert to <number(integral)>',
    args: [
      { s: "''",                    v: [ '' ] },
      { s: "'123'",                 v: [ '123' ] },
      { s: "'abc'",                 v: [ 'abc' ] },
      { s: "'123abc'",              v: [ '123abc' ] },
      { s: "'-321'",                v: [ '-321' ] },
      { s: "'123.321'",             v: [ '123.321' ] },
      { s: "'-321.123'",            v: [ '-321.123' ] },
      { s: "'12345678901'",         v: [ '12345678901' ] },
      { s: "'1234567890123456789'", v: [ '1234567890123456789' ] },
      { s: "[ ]",                   v: [ [] ] },
      { s: "[ 1 ]",                 v: [ [ 1 ] ] },
      { s: "[ 1, 2 ]",              v: [ [ 1, 2 ] ] },
      { s: "[ 1, 2, 3 ]",           v: [ [1, 2, 3 ] ] },
      { s: "[ 3 ]",                 v: [ [ 3 ] ] },
      { s: "[ 'a' ]",               v: [ [ 'a' ] ] },
      { s: "[ '1' ]",               v: [ [ '1' ] ] },
      { s: "[ '3' ]",               v: [ [ '3'] ] },
      { s: "[ 3, '2' ]",            v: [ 3, '2' ] },
      { s: "[ 123 ]",               v: [ 123 ] },
    ],
  },
}

/**
 * Test: command-line number.
 */

const num = {
  1: {
    info: 'functionality (basics)',
    test: [
      'int',
    ],
  }
}

const x = process.argv.includes('test', 2)
  ? Number(process.argv.at(3))
  : false

if (x) {
  const out = console.debug
  const mod = require('../../main')
  const pkg = mod.package()

  switch (x) {
    case 1||2||3||4||5||6||7||8||9: {
      out(`@ ${pkg.name}:test[${x}]`, num[x].info, '...')
      out()

      num[x].test.forEach((fun) => {
        out()
        out('#', cfg[fun].info)
        out('> ---------')
        cfg[fun].args.forEach((arg) => {
          out(`> ${pkg.name}.${fun}(${arg.s}):`, mod[fun](...arg.v))
        })
      })

      out()
      out(`@ ${pkg.name}:test[${x}] done.`)
    } break

    default: {
      console.error(`@ ${pkg.name}:test[${x}] unknown!`)
    } break
  }
}
