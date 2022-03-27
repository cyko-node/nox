'use strict'
/* --- + ------------------------------------------------------------------- +
 | NOX | CORE : MOD
 + --- + ---------- */

import { file } from '../util/index.js'

// ------------------------------------------------------------------------- +

class Mod {
  #data = {
    pkg: { default: { }, user: { } },
    cfg: { default: { }, user: { } },
  }

  constructor(pkgPath, cfgPath ) {
    [
      { path: pkgPath, key: 'pkg' },
      { path: cfgPath, key: 'cfg' },
    ].forEach((e) => {
      this.#data[e.key].default = file.read(e.path)
      console.log('----------')
      console.log('file.path:', this.#data[e.key].default.path)
      console.log('file.name:', this.#data[e.key].default.name)
      console.log('file:', this.#data[e.key].default.data)
      console.log('----------')
      console.log('file:', this.#data[e.key].default.object())
      console.log('----------')
    })
    
    Object.defineProperty(this.#data.cfg, 'user', {
      configurable: false,
      enumerable: true,
      value: JSON.parse(JSON.stringify(this.#data.pkg.default))
    })
  }

  pkg(k) {
    return this.#data.pkg.default[k]
  }

  get name()        { return this.pkg('name') }
  get version()     { return this.pkg('version') }
  get description() { return this.pkg('description') }
  get author()      { return this.pkg('author') }
  get licence()     { return this.pkg('licence') }

  cfg(k, def = false) {
    return def? this.#data.cfg.default[k] : this.#data.pkg.user[k]
  }

  set(k, v) {
    return this.#data.cfg.user[k] = v
  }
}

// ------------------------------------------------------------------------- +

export { Mod as mod }

/* --- + ---------- +
 | NOX | CORE : MOD
 + --- + ------------------------------------------------------------------- */
