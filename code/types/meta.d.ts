/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/meta' {
 /*
  +------------------------------------------------------------------------ *
  | help
  +------------------------------------------------------------------------ *
  */

  namespace help {
    namespace struct { type key = number|string|symbol; }
    namespace vector { type key = number; }

    type vector = any[];
    type struct = { [I in struct.key]: any; };

    namespace type {
      type key<T>
        = T extends help.vector ? number
        : T extends help.struct ? number|string|symbol : never;

      type vector<T = any> = T[];
      type struct<T = any, K extends key<{}> = key<{}>> = { [I in K]: T; };
    }

    type property<T, Name extends type.key<{}>> = { [I in Name]: T; };
    type callable<T, Name extends type.key<{}>> = { [I in Name]:() => T; }
  }

 /*
  +------------------------------------------------------------------------ *
  | meta
  +------------------------------------------------------------------------ *
  */

  global { namespace meta {
    enum attribute {
      constant = '[attribute:constant]',
      optional = '[attribute:optional]'
    }
  }}


  global { namespace meta { namespace type {
    type key<T>
      = T extends help.vector ? number
      : T extends help.struct ? number|string|symbol : never;

    type method<T = any> = (...args: never[]) => T;
    type vector<T = any> = T[];
    type struct<T = any, K extends key<{}> = key<{}>> = { [I in K]: T; };

    type as<T>
      = T extends type.method<infer R>//T extends (...args: any[]) => infer R
      ? R
      : never;

    namespace of {
      type key<T>
        = T extends help.vector ? number
        : T extends help.struct ? number|string|symbol : never;

      type method<T = any> = (...args: never[]) => T;
      type vector<T = any> = T[];
      type struct<T = any, K extends key<{}> = key<{}>> = { [I in K]: T; };
    }

    type of<T>
      = T extends of.method<infer R> // extends (...args: any[]) => infer R
      ? R//ESULT
      : T extends of.vector<infer E> // extends (infer E)[]
      ? E//LEMENT
      : T extends of.struct<infer P> // extends { [I in infer K]: infer P }
      ? P//ROPERT(Y/IES)
      : never;

    /*
    type constant<T, Apply extends boolean = true>
      = Apply extends true
      ? { +readonly [Property in keyof T]: T[Property]; }
      : { -readonly [Property in keyof T]: T[Property]; };
    */

  }}}

  namespace test {
    function fa(): 3;
    function fb(b: string): 2;

    type x = {
      a: meta.type.of<[]>;
      b: meta.type.of<{}>;
      c: meta.type.of<string[]>;
      d: meta.type.of<{ X: 1; }>;
      e: meta.type.of<typeof fa>;
      f: meta.type.of<typeof fb>;
      g: meta.type.of<{ A: string; 1: 22;}>;
      h: meta.type.of<{ A: string; f(a:number): any; 1: 22;}>;
    }
    type y = {
      a: meta.type.of<[]>;
      b: meta.type.of<{}>;
      c: meta.type.of<string[]>;
      d: meta.type.of<{ X: 1; }>;
      e: meta.type.of<typeof fa>;
      f: meta.type.of<typeof fb>;
    }
  }
}
