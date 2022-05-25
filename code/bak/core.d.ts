/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/core' {
  namespace Platform {
    type Name = NodeJS.Platform | 'posix';
    type Type = 'dos' | 'nix';

    /**
     * Operating system platform identifiers.
     */

    const Name: { [K in Platform.Name]: K; };

    /**
     * Operating system platform type / standard.
     * 
     * + `nix` - Posix / Unix.
     * + `dos` - win32.
     */
  
    const Type: { [K in Platform.Type]: K; };

    interface type
    /**
     * Returns the a string identifying the operating system platform on which
     * the Node.js process is running.
     * 
     * 
     */
    function name(): Name;

    /**
     * Returns the type of the platform specified by name
     * @param name Optional 
     */

    function type(name?: Name): Type;
  }


  namespace Platform {

  }
}
