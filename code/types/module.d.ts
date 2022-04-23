/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/module' {
  export namespace Module {

    namespace Person {
      type role = 'author' | 'maintainer' | 'contributor';
    }
  
    interface Person {
      readonly data: object;
      readonly name: string;
      readonly mail: string;
      readonly role: Person.role;
    }
  
    namespace Version {
      interface Number {
        string(): string;
        number(): number;
      }
    }
  
    interface Version {
      readonly major: Version.Number;
      readonly minor: Version.Number;
      readonly patch: Version.Number;
      string(): string;
      readonly name: string;
    }
  
    interface Package {
      readonly content: object;
      readonly name: string;
      readonly description: string;
      readonly version: Version;
      readonly license: string;
      readonly author: Person;
      readonly people: Person[];
      readonly maintainers: Person[];
      readonly contributors: Person[];
    }
  
    const initialized: boolean;
  
    const object: Package;
    const path: string;
    const name: string;
    const version: Version;
    const description: string;
  
    const author: Person;
    const people: Person[];
    const maintainers: Person[];
    const contributors: Person[];

  }
}
