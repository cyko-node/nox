/**
 * Miscellaneous / Genaral utilities.
 *
 * ```js
 * import * as misc from 'nox/util/misc'
 * import { x }     from 'nox/util/misc'
 * import { misc }  from 'nox/util'
 * ```
 *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/util/misc' {

  /**
   * In mathematical numeral systems the radix r is usually the number of
   * unique digits, including zero, that a positional numeral system uses to
   * represent numbers. In the interesting cases the radix is the absolute
   * value {\displaystyle r=|b|}{\displaystyle r=|b|} of the base b, which
   * may also be negative. For example, for the decimal system the radix
   * (and base) is ten, because it uses the ten digits from 0 through 9.
   * When a number "hits" 9, the next number will not be another different
   * symbol, but a "1" followed by a "0". In binary, the radix is two, since
   * after it hits "1", instead of "2" or another written symbol, it jumps
   * straight to "10", followed by "11" and "100".
   * 
   * The highest symbol of a positional numeral system usually has the value
   * one less than the value of the radix of that numeral system.
   * The standard positional numeral systems differ from one another only in
   * the base they use.
   * 
   * The radix is an integer that is greater than 1, since a radix of zero
   * would not have any digits, and a radix of 1 would only have the zero
   * digit. Negative bases are rarely used. In a system with more than
   * {\displaystyle |b|}{\displaystyle |b|} unique digits, numbers may have
   * many different possible representations.
   */

  /**
   * A **radix**, or **base**, defines the number of distinct symbols used
   * to represent a numeric value.
   *
   * + {@linkcode Radix.bin bin} binary
   * + {@linkcode Radix.bin bit} bitwise
   * >
   * + {@linkcode Radix.oct oct} octal
   * >
   * + {@linkcode Radix.dec dec} decimal
   * + {@linkcode Radix.dec den} denary
   * + {@linkcode Radix.dec num} numerary
   * >
   * + {@linkcode Radix.hex hex} hexadecimal
   * + {@linkcode Radix.txt txt} hexatrigesimal ( alphanumerical )
   *
   * Each name refers to a *positional-numeral-system*.
   */

  enum Radix {
    /**
     * Binary `base2`  
     * Represents numbers using a total of 2 distinct symbols ( bitwise ).
     *
     * + `[0-1]`
     *
     * Each digit represents a bit.
     */

    bin = 2,

    /**
     * Octal `base8`  
     * Represents numbers using a total of 8 distinct symbols.
     *
     * + `[0-7]`
     *
     * Each digit represents 3 bits ( max ).
     *
     * ```js
     * bit: 000|001|010|011|100|101|110|111
     * oct:   0|  1|  2|  3|  4|  5|  6|  7
     * ```
     */

    oct = 8,

    /**
     * Decimal `base10`  
     * Represents numbers using a total of 10 distinct symbols.
     *
     * + `[0-9]`
     *
     * ie. the normal representation of numbers.
     */

    dec = 10,

    /**
     * Hexadecimal `base16`  
     * Represents numbers using a total of 16 distinct symbols.
     *
     * + `[0-9]`
     * + `[A-F]`
     * 
     * Each digit represents 4 bits ( max ).
     * 
     * ```js
     * // numbers
     * bit: 0000|0010|0011|0100|0101|0110|0111|1000|1001
     * hex:    0|   2|   3|   4|   5|   6|   7|   8|   9
     * // letters
     * bit: 1010|1011|1100|1101|1110|1111
     * hex:    A|   B|   C|   D|   E|   F
     * ```
     */

    hex = 16,

    /**
     * Hexatrigesimal `base36`  
     * Represents numbers using a total of 36 distinct symbols
     * ( alphanumeric ).
     *
     * + `[0-9]`
     * + `[A-Z]`
     * 
     * Each digit represents 7 bits ( max ).
     *
     * ```js
     * // numbers
     * dec: 0|1|2|3|4|5|6|7|8|9
     * txt: 0|1|2|3|4|5|6|7|8|9
     * // letters
     * dec: 10|11|12|13|14|15|16|17|18|19|20|21|22
     * txt:  A| B| C| D| E| F| G| H| I| J| K| L| M
     * dec: 23|24|25|26|27|28|29|30|31|32|33|34|35
     * txt:  N| O| P| Q| R| S| T| U| V| W| X| Y| Z
     * ```
     */

    txt = 36,
  }

  enum Radix {
    /**
     * {@linkcode Radix.bin} Bitwise
     */

    bit = Radix.bin,

    /**
     * {@linkcode Radix.dec} Denary
     */

    den = Radix.dec,

    /**
     * {@linkcode Radix.dec} Numerary
     */

    num = Radix.dec,
  }

  /**
   * Encodes a number using the specified radix / base.
   *
   * @param n The number.
   * @param r The {@link Radix radix} ( base ).
   */

  function encode(n: number, r: Radix): string;

  /**
   * Returns a random number.
   *
   * @param n The number of digits `[1-16]` | `16`
   */

  function random(n?: number): number;

  /**
   * Returns the nearest integer of a number.
   *
   * ```js
   * round( 0.5, false) >  1
   * round(-0.5, false) >  0
   * round(-0.5, true)  > -1
   * ```
   *
   * @param n The number.
   * @param absolute Round the absolute value | `true`
   */

  function round(n: number, absolute?: boolean): number;

  /**
   * Returns a unique ( random ) alphanumeric value as a string.
   */

  function unique(): string;

}
