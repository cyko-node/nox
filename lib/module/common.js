/** ------------------------------------------------------------------------ *
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 * ----—
 * @path cyko:nox/module
 * @file .js
 ** ---------------------------------------------------------- */ 'use strict'

import { env } from 'process'

const common = {
  default: {
    path: env['npm_package_json']
  }
}
