/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/fs' {
  /**
   * @see {@linkcode https://nodejs.org/api/path.html#pathdirnamepath node/path basename}
   * @see {@linkcode https://en.wikipedia.org/wiki/Dirname unix basename}
   * @see `cyko nox/util: dirname`
   */

  import { Atom } from 'nox/base'

  /**
   * Represents a filesystem directory node.
   */

  export class Path extends Atom<string> {
    constructor(x: string | Path | Atom<String>);

    readonly core: string;

    /**
     * Returns the directory name, ie everything but the base.
     * @param n Normalize? `default: false`
     */
  
    name(n?: boolean): string;

    /**
     * Returns the last portion / segment of the path.
     * @param e Optional extension to remove from the result.
     */

    base(e?: string): string;

    /**
     * Returns the complete path as a string.
     * @param n Normalize? `default: false`
     */

    string(n?: boolean): string;

    /**
     * Returns the complete path as a vector.
     */

    vector(): string[];
  }

  /**
   * Represents a filesystem node.
   */

  class File {
    constructor(x: string | Path);
    get path(): Path;
    get name(): string;
    get type(): string;
  }

}
