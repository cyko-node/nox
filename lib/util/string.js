/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : STRING
 + --- + ------------- */

/**
 * Concatenate strings.  
 * Appends the source string to the destination string object.
 * @param {String} d  The destination object.
 * @param {string} s  The source value.
 * @param {*}     [p] Optional prefix value.
 */

function strcat(d, s, p = '') {
  return d.concat(p, s)
}

function string(x, ...arg) {
  function impl(data, head, ...tail) {
    if (arguments.length > 1) {
      return impl(data.concat(' ', String(head)), ...tail)
    } else {
      return data
    }
  }

  return impl(new String(x), ...arg).valueOf()
}

/* --- + ------------------------------------------------------------------- +
 | NOX | UTIL : STRING > EXPORTS
 + --- + ------------- */

export { string }
