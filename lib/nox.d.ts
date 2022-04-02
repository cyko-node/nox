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

declare type Packman = {
  get name(): string;
  get mail(): string;
}

declare type VersionNumber = {
  string(): string;
  number(): number;
}

declare type Version = {
  get major(): VersionNumber;
  get minor(): VersionNumber;
  get patch(): VersionNumber;

  string(): string;

  get name(): string;
}

declare type Package = {
  get name(): string;
  get description(): string;
  get version(): Version;
  get author(): Packman;
  get license(): string;
}

export interface Packagez {
  constructor(): Packagez;
}

export const pkg: Package;
export const version: Version;

// ------------------------------------------------------------------------- *

declare interface TypeTests {
  array(): boolean;
  boolean(): boolean;
  function(): boolean;
  number(): boolean;
  object(): boolean;
  string(): boolean;
  symbol(): boolean;
}

declare enum TypeNames {
  array = 'array',
  boolean = 'boolean',
  function = 'function',
  number = 'number',
  object = 'object',
  string = 'string',
  symbol = 'symbol'
}

declare interface Type {
  get name(): TypeNames | 'undefined';
  is: TypeTests;

}


// ------------------------------------------------------------------------- *

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
