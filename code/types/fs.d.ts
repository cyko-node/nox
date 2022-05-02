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

  type PathCore = string;

  /**
   * Represents a filesystem directory node.
   */

  class Path extends Atom<PathCore> {
    constructor(x: PathCore | Path);

    /**
     * The complete path.
     */

    public get data(): PathCore;
    protected get path(): PathCore;

    /**
     * Returns the directory name, ie everything but the base.
     * 
     * @see `nox/util dirname`
     * 
     * @param n Normalize? `default: false`
     */
  
    name(n?: boolean): PathCore;

    /**
     * Returns the last portion ( segment ) of the path.
     *
     * @see {@link external:nox/util x}
     * ```js
     * import { basename } from 'nox/util'
     * ```
     * 
     * @param e Optional extension to remove from the result.
     */

    base(e?: string): PathCore;

    /**
     * Returns the complete path in normalized form.
     *
     * @see `nox/util normalize`
     */

    normalize(): PathCore;
  }

  /**
   * Represents a filesystem node.
   */

  class File {
    constructor(x: string | Path | Atom<Path>);

    /**
     * The {@link Path} object.
     */

    get path(): Path;

    /**
     * The complete name ( including extension ).
     */

    get name(): string;

    /**
     * The type / extension.
     */

    get type(): string;
  }

}
