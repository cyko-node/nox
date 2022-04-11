/**
 * **`CYKO` {@link nox `NOX`}** - **Node Xtensions**
 *
 * > ---
 *
 * ```
 * import * as nox from 'nox'
 * // -----------------------
 * const nox = require('nox')
 * ```
 *
 * > ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module "nox";

/**
 * **`CYKO` {@link nox `NOX`}** - **Node Xtensions**
 *
 * > ---
 *
 * ```
 * import * as nox from 'nox'
 * // -----------------------
 * const nox = require('nox')
 * ```
 *
 * > ---
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

export as namespace nox;

// ------------------------------------------------------------------------- *

export namespace Module {

  namespace Person {
    type role = 'author' | 'maintainer' | 'contributor';
  }

  /**
   * Represents a person mentioned in the package configuration.
   */

  interface Person {

    /**
     * Provides access to the complete data, unaltered / as defined.
     */

    readonly data: object;

    readonly name: string;
    readonly mail: string;

    /**
     * Represents the context in which the person is mentioned.
     *
     * + `author`
     * + `maintainer`
     * + `contributor`
     *
     * There is always one single `author` ( unique ).
     */

    readonly role: Person.role;
  }

  /**
   * Represents one of the three number-combinations in a version string.
   *
   * + `major`
   * + `minor`
   * + `patch`
   */

  interface Vumber {
    string(): string;
    number(): number;
  }

  /**
   * Represents a version, numbers and codename.
   */

  interface Version {
    /**
     * The `major` number.
     */

    readonly major: Vumber;

    /**
     * The `minor` number.
     */

    readonly minor: Vumber;

    /**
     * The `patch` number.
     */

    readonly patch: Vumber;

    /**
     * Returns the complete version string.
     *
     * ```js
     * version.string() > '1.2.03'
     * ```
     */

    string(): string;

    /**
     * The `codename`.
     */

    readonly name: string;
  }

  /**
   * Represents the contents of: `package.json`
   *
   * In general, members are named as the property they refer to.
   * In special cases, members have no equally named property:
   * + {@link Package.name `content`}
   *   - *provides access to the complete data, unaltered / as defined.*
   * + {@link Package.name `people`}
   *   - *provides access to all people, as an array.*
   *
   * @since 0.1.0
   */

  interface Package {

    /**
     * Constructs a {@link Package} using a `package.json` object.
     *
     * *Makes a deep-copy of the provided object.*
     *
     * ---
     *
     * There's several ways to obtain the required data and construct a
     * {@link Package}. A few examples...
     * @example <caption>`Node` `ESModule` **EXPERIMENTAL!**</caption>
     * import { default as o } from './package.json' assert { type: 'json' }
     * var p = new Package(o)
     * // dynamic approach...
     * var o = await import('./package.json', { assert: { type: 'json' } })
     * var p = new Package(o.default)
     * @example <caption>`Node` `CommonJS`</caption>
     * var o = require('./package.json')
     * var p = new Package(o)
     * @example <caption>`Node` `*`</caption>
     * var o = readFileSync('./package.json')
     * var p = new Package(JSON.parse(o))
     *
     * @param o The `package.json` contents ( as a structured object ).
     */

    constructor(o: object): Package;

    /**
     * Provides access to the complete data, unaltered / as defined.
     */

    readonly content: object;

    /**
     * The name property.
     */

    readonly name: string;

    /**
     * The description property.
     */

    readonly description: string;

    /**
     * The version property as a {@link Version} object.
     * @example
     * version.major.number() >  1
     * version.minor.number() >  23
     * version.patch.number() >  123
     * version.patch.string() > '0123'
     * @example
     * version.name > 'codename'
     */

    readonly version: Version;

    /**
     * The author property as a {@link Person} object.
     */

    readonly author: Person;

    /**
     * The license property.
     */

    readonly license: string;

    /**
     * The people as a {@link Person} array. Includes...
     * + `author`
     * + `maintainers`
     * + `contributors`
     */

    readonly people: Person[];

    /**
     * The maintainers property as a {@link Person} array.
     */

    readonly maintainers: Person[];

    /**
     * The contributors property as a {@link Person} array.
     */

    readonly contributors: Person[];
  }


  const initialized: boolean;

  const data: Package;
  const path: string;
  const name: string;
  const version: Version;
  const description: string;
  const author: Person;
  const people: Person[];
  const maintainers: Person[];
  const contributors: Person[];

  // ----------------------------------------------------------------------- *


  // ------------------------------------------
  namespace init {
    namespace source {
      type env = string; //object | 'default';
      type file = string;
      type struct = object;
    }

    type attributes = {
      env?: source.env;
      file?: source.file;
      object?: source.struct;
    };
  }

  function initialize(attributes?: init.attributes): Package;
 
  // ----------------------------------------------------------------------- *
}
