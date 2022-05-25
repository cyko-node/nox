/**
 * Provides utilities for working with file and directory paths.  
 *
 * ```js
 * import * as path from 'nox/util/path'
 * import { x }     from 'nox/util/path'
 * import { path }  from 'nox/util'
 * ```
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */


declare module 'nox/util/path' {

  /**
   * Returns the last portion / segment of a path.
   *
   * `original documentation`
   *
   * Similar to the Unix basename command.  
   * Often used to extract the file name from a fully qualified path.
   *
   * @param p The path to evaluate.
   * @param e Optional extension to remove from the result.
   */

  function basename(p: string, e?: string): string;

  /**
   * Returns the directory name, ie everything but the base.
   *
   * `original documentation`
   *
   * Return the directory name of a path.  
   * Similar to the Unix dirname command.
   *
   * @param p The path to evaluate.
   */

  function dirname(p: string): string;

  /**
   * `original documentation`
   *
   * Return the extension of the path, from the last '.' to end of string
   * in the last portion of the path.
   * If there is no '.' in the last portion of the path or the first
   * character of it is '.', then it returns an empty string.
   *
   * @param p The path to evaluate.
   */

  function extname(p: string): string;

  /**
   * `original documentation`
   *
   * Normalize a path string, reducing '..' and '.' parts.
   * When multiple slashes are found, they're replaced by a single one;
   * when the path contains a trailing slash, it is preserved.
   * On Windows backslashes are used.
   *
   * @param p The path to normalize.
   */

  function normalize(p: string): string;

  /**
   * Returns the ( platform specific ) path-separator: `/` or `\`
   *
   * @param p Optional platform name. Default is the current platform.
   */

  function separator(p?: NodeJS.Platform): string;

  /**
   * Returns the ( platform specific ) path-delimiter: `:` or `;` 
   *
   * @param p Optional platform name ( default: cutrent platform ).
   */

  function delimiter(p?: NodeJS.Platform): string;
}
