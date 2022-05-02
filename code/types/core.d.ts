/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/core' {
  namespace Platform {
    type Name = NodeJS.Platform;
    type Type = 'dos' | 'nix';

    const Name: { [K in Platform.Name]: K; };
    const Type: { [K in Platform.Type]: K; };
  }
}
