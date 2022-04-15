/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/fs' {

  import { Atom } from 'nox/base'
  interface Node extends Atom<string> {

  }

  interface Path {}

  interface File extends Node {}
}
