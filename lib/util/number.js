/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : NUMBER
 + --- + ------------- */

function int(x) {
  const n = Number(x)
  return n >= 0 ? Math.floor(n) : Math.ceil(n)
}

function number(x, integral = false) {
  return integral ? int(x) : Number(x)
}

/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : NUMBER > EXPORTS
 + --- + ------------- */

export { int, number }
