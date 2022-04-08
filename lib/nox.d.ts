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
// PACKAGE
// ------------------------------------------------------------------------- *

/** ------------------------------------------------------------------------ *
 * @interface Package package.json
 *//***/

declare namespace meta {

  type PackmanRole = 'author' | 'maintainer' | 'contributor'

  /**
   * `package.json` interface
   *
   * ---
   *
   * Represents a person mentioned in the following contexts...
   *
   * + `author`
   * + `maintainers`
   * + `contributors`
   *
   * The context defines the  {@link PackageRole **role**} of a person.
   *
   * The `author` role is unique / singular, ie assigned to one person alone.  
   * The `author` role is always present.
   */

  interface Packman {

    /**
     * Provides access to the complete data, unaltered / as defined.
     */

    readonly data: object;

    readonly name: string;
    readonly mail: string;

    /**
     * Represents the context in which the person is mentioned.
     */

    readonly role: PackmanRole;
  }

  /**
   * `package.json` interface
   *
   * ---
   *
   * Represents one of the three numbers in a version string.  
   * Where `major` refers to the first number, `minor` the second, and `patch`
   * the third.
   */

  interface Vumber {

    /**
     * Returns the number as a **string**.
     */

    string(): string;

    /**
     * Returns the number as ( you guessed it ) a **number**.
     */

    number(): number;
  }

  /**
   * `package.json` interface
   *
   * ---
   *
   * Represents a version, numbers and codename.
   *
   * @example
   * const v = new Version('1.23.0123', 'cyko')
   * v.major.number() >  1
   * v.minor.number() >  23
   * v.patch.number() >  123
   * v.patch.string()> '0123'
   * v.name > 'cyko'
   */

  type Version  = {

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
     * @example
     * version.string() > '1.2.3'
     */

    string(): string;

    /**
     * The `codename`.
     */

    readonly name: string;
  }

  /**
   * `package.json` interface ( main implementation )
   *
   * ---
   *
   * The following members are named as the property they refer to.
   *
   * + {@link Package.name `name`}
   * + {@link Package.name `description`}
   * + {@link Package.name `version`}
   * + {@link Package.name `author`}
   * + {@link Package.name `license`}
   * + {@link Package.name `maintainers`}
   * + {@link Package.name `contributors`}
   *
   * The following members don't have a property counterpart.
   *
   * + {@link Package.name `people`}
   * + {@link Package.name `data`}
   *
   * The special {@link Package.data data} member provides access to the entire
   * file, as a properly structured object.
   */

  interface Package {

    /**
     * Constructs a {@link Package} from an `package.json` object.
     *
     * *Makes a deep-copy of the provided object.*
     *
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
     * @param o The `package.json` contents (as a structured object).
     */

    constructor(o: object): Package;

    get data(): object;

    get name(): string;
    get description(): string;
    get version(): Version;
    get author(): Packman;
    get license(): string;

    get people(): Packman[];
    get maintainers(): Packman[];
    get contributors(): Packman[];
  }

  /**
   * Module metadata : `package.json`
   */

  export const pkg: Package;

  /**
   * Module metadata : `pkg.version` alias.
   */

  export const version: Version;

  type InitializerAttributes = {
    env?: object | 'default';
    file?: string;
    object?: object;
  }

  function initialize(attributes: InitializerAttributes): Package;
}
// ------------------------------------------------------------------------ *

export namespace init {
  enum mode {
    environment,
    file,
    object,
    property,

    default,
  }

  type item = {
    mode: mode;
    data: object;
  };

  type attributes = {
    pkg:  item;
    cfg?: item;
  };

  function load(attr: attributes): meta.Package;
}


// ------------------------------------------------------------------------ *


// ------------------------------------------------------------------------- *


// ------------------------------------------------------------------------- *
