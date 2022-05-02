/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/meta' {
  namespace help {
    namespace struct { type key = number|string|symbol; }
    namespace vector { type key = number; }

    type vector = any[];
    type struct = { [I in struct.key]: any; };
  }

  global {
    namespace type {
      type key<T>
        = T extends help.vector ? number
        : T extends help.struct ? number|string|symbol : never;

      type vector<T = any> = T[];
      type struct<T = any, K extends key<{}> = key<{}>> = {
        [I in K]: T;
      };

      type list<T> = vector<T>;
      type dict<T> = struct<T | undefined>;

/*
      type property<T, Name extends key<{}>> = {
        [I in Name]: T;
      };

      type callable<T, Name extends key<{}>>
        = attr.callable<struct<T, Name>>
      type readonly<T, Name extends key<{}>>
        = attr.readonly<property<T, Name>>
      type optional<T, Name extends key<{}>>
        = attr.optional<property<T, Name>>

  
      namespace attr {
        type callable<T, X extends boolean = true>
          = X extends true
          ? { [Property in keyof T]:() => T[Property]; }
          : { [Property in keyof T]: T[Property]; }

        type readonly<T, X extends boolean = true>
          = X extends true
          ? { +readonly [Property in keyof T]: T[Property]; }
          : { -readonly [Property in keyof T]: T[Property]; };

        type optional<T, X extends boolean = true>
          = X extends true
          ? { [Property in keyof T]+?: T[Property]; }
          : { [Property in keyof T]-?: T[Property]; };
      }
*/
      namespace attr {
        type defaults = 'defaults';
        type optional = 'optional';
        type readonly = 'readonly';
      }

      namespace set {
        type readonly<T, X extends attr.defaults|attr.optional|attr.readonly>
          = [X] extends [attr.defaults]
          ? { -readonly [Property in keyof T]: T[Property]; }
          : { +readonly [Property in keyof T]: T[Property]; }

        type optional<T, X extends attr.defaults|attr.optional|attr.readonly>
          = [X] extends [attr.defaults]
          ? { [Property in keyof T]-?: T[Property]; }
          : { [Property in keyof T]+?: T[Property]; }
      }

      type t = property<number, 'test'>

      type set<T, X extends attr.defaults|attr.optional|attr.readonly>
        = [X] extends [attr.optional]
        ? set.optional<T, attr.optional>
        : [X] extends [attr.readonly]
        ? set.readonly<T, attr.readonly>
        : [X] extends [attr.optional | attr.readonly]
        ? set.optional<set.readonly<T, attr.readonly>, attr.optional>

        : [X] extends [attr.defaults]
        ? set.readonly<T, attr.defaults>
        : [X] extends [attr.optional | attr.defaults]
        ? set.optional<set.readonly<T, attr.defaults>, attr.optional>
        : [X] extends [attr.readonly | attr.defaults]
        ? set.readonly<set.optional<T, attr.defaults>, attr.readonly>

        : never;


      type property<T, Name extends key<{}>> = {
        [I in Name]: T;
      };

      type callable<T, Name extends key<{}>> = {
        [I in Name]:() => T;
      };

      type hyryj = callable<number, 'jvfgg'>

      type readonly<T, Name extends key<{}>>
        = set.readonly<property<T, Name>, attr.readonly>
      type optional<T, Name extends key<{}>>
        = set.optional<property<T, Name>, attr.optional>

      type xfdhh = {
        a: set<t, attr.optional>
        b: set<t, attr.readonly>
        c: set<t, attr.defaults>
        d: set<t, attr.optional | attr.readonly>
        e: set<t, attr.readonly | attr.optional>
        f: set<t, attr.optional | attr.defaults>
        g: set<t, attr.defaults | attr.optional>
        h: set<t, attr.readonly | attr.defaults>
        i: set<t, attr.defaults | attr.readonly>
      }
    }
  }

  const xcv: {
    struct: {
      a: type.key<{}>;
      b: type.key<type.struct>;
      c: type.key<Object>;
      d: type.key<{ a:any }>;
    }
    vector: {
      a: type.key<[]>;
      b: type.key<string[]>;
      c: type.key<type.vector>;
      d: type.key<type.vector<string>>;
      e: type.key<Array<any>>;
      f<T>(): type.key<Array<T>>
    }
    others: {
      a: type.key<1>;
      b: type.key<0.1>;
      c: type.key<'a'>;
      d: type.key<boolean>;
      e: type.key<any>;
      f: type.key<never>;
      g: type.key<string>;
    }
  }
}

/*
      type expression<T> = {
        self: expression<T>;
        type: T;
      };

      type type<T>
        = T extends expression<infer U>
        ? U
        : T;

      type select<T extends struct, K extends index<{}>> = expression<T[K]>;

      namespace name {
        type of<T>
          = T extends select<infer S, infer K>
          ? K // the actual property names!!
          : T extends struct<infer U, infer K>
          ? K
          : never;

        const o: of<1>
        const p: of<{1:boolean;x:string}>
      }
      const no: {
        o: name.of<select<{1:string; aab:number}, 'aab'>>,
        p: name.of<select<{1:boolean}, 1>>,
        q: name.of<vector<number>>,
        r: name.of<boolean[]>,
        s: name.of<Array<string>>,
        t: name.of<{1:boolean;x:string}>
      }

      namespace typhe {
        type as<T>
          = T extends (...args: any) => infer R
          ? R
          : T;

        type of<T>
          = T extends expression<infer U>
          ? U
          : T extends vector<infer U>
          ? T[number] extends never ? [] : U
          : T extends struct
          ? T[keyof T] extends never ? {} : T[keyof T]
          
          : T | 4; //type<T>;
      }

      function tf(): struct;
      type tft = () => number;

      const to: {
        m: type.of<{}>
        n: type.of<{1:boolean;x:string}>
        o: type.of<select<{1:string; aab:number}, 'aab'>>
        p: type.of<select<{1:boolean}, 1>>
        q: type.of<vector<number>>
        r: type.of<boolean[]>
        s: type.of<Array<string>>
        t: type.of<[]>
        x: type.as<typeof tf>
        y: type.of<tft>
        z: typeof tf
      }

      const ka: index<{a:number}>;
      const kb: index<{}>;

      type element_<T, K extends index<{}> = 0>
        = T extends vector ? T[index<[]>]
        : T extends struct ? T[K]
        : T;

      
      type one<A> = {
        1: A;
      };

      type two<A, B> = {
        1: A;
        2: B;
      };


      type seglect<T extends struct, P extends index<{}>>
        = two<T, P>;

      type element<T>
        = T extends vector
        ? T[index<[]>]
        : T;

      const aa: element<string[]>;

      type property<T extends struct, K extends index<{}> | void = void>
        = K extends void
        ? T[keyof T] // all prperty types (or just typename any)
        : T[K extends void ? 0 : K];

      const cc: property<{a, dict:boolean}, 'dict'>
      const bb: property<{a:boolean, 1:string, g:bigint}>
      */












/*
      namespace list {
        type type = any[];
        type key = number;
  
        type element<T extends type> = T[number];
      }

      namespace dict {
        type key = PropertyKey;
        type type = {
          [index: dict.key]: any;
        };


        // string | number | symbol

        type element<T extends type, K extends dict.key>
          = T[K];

        type readonly<
        type apply<T extends type, F extends flag.optional | flag.readonly>
          = [F] extends [flag.optional] ? {           [X in keyof T]+?: T[X]; } 
          : [F] extends [flag.readonly] ? { +readonly [X in keyof T]:   T[X]; }
          : T;

        type strip<T extends type, F extends flag.optional | flag.readonly = flag>
          = [F] extends [flag.optional] ? {           [X in keyof T]-?: T[X]; }
          : [F] extends [flag.readonly] ? { -readonly [X in keyof T]:   T[X]; }
          : { -readonly [X in keyof T]-?: T[X]; };
      }


      type apply<T, F extends flag.optional | flag.readonly>
        = [F] extends [flag.optional]
        ? flag.optional.apply<T>
        : [F] extends [flag.readonly]
        ? flag.readonly.apply<T>
        : T;

      type strip<T, F extends flag.optional | flag.readonly = flag>
        = [F] extends [flag.optional]
        ? flag.optional.strip<T>
        : [F] extends [flag.readonly]
        ? flag.readonly.strip<T>
        : flag.readonly.strip<flag.optional.strip<T>>

      type element<T, K extends list.key | dict.key = 0>
        = T extends list.type ? list.element<T>
        : T extends dict.type ? dict.element<T, K>
        : T;

      //#region test ---------------------------------

      class a  {
        readonly a: number;
        f(): string;
        u?: boolean;
      }

      type ra = apply<a, flag.readonly>
      type oa = apply<a, flag.optional>
      type rs = strip<a, flag.readonly>
      type os = strip<a, flag.optional>
      type xs = strip<a>

      //#endregion -----------------------------------

      type element_<T, K extends dict.key = 0>
        = T extends list.type ? T[number]
        : T extends dict.type ? T[K]
        : T;

      type pair<One = any, Two = any> = {
        1: One;
        2: Two;
      };

      type select<T extends pair, L, R>
        = T[1] extends T[2]
        ? L
        : R;


      // -------------------------------------
      interface Dict<T> {
        [key: string]: T | undefined;
      }
      interface ReadOnlyDict<T> {
        readonly [key: string]: T | undefined;
      }
      // -------------------------------------
    */
