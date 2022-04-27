/**
 * @author eggheadedmonkey <cyko@eggheadedmonkey.com>
 */

declare module 'nox/meta' {
  namespace help {
  }

  global {
    namespace meta {
      type index<T>
        = T extends boolean | bigint | string | symbol ? never
        : T extends number ? T
        : T extends (infer E)[] ? number
        : T extends {} ? number | string | symbol : never;

      const xcv: {
        struct: {
          a: index<{}>;
          b: index<struct>;
          c: index<Object>;
        }
        vector: {
          a: index<[]>;
          b: index<string[]>;
          c: index<vector>;
          d: index<vector<string>>;
          e: index<Array<any>>;
        }
        index: {
          a: index<1>;
          b: index<0.1>;
          c: index<'a'>
        }
      }


      type vector<T = any> = T[];
      type struct<I extends index<{}> = index<{}>, T = any> = {
        [X in I]: T;
      };


      type expression<T> = {
        self: expression<T>;
        type: T;
      };

      type type<T>
        = T extends expression<infer U>
        ? U
        : T;

      type select<T extends struct, K extends index<struct>> = expression<T[K]>;

      namespace name {
        type of<T>
          = T extends struct<infer K, infer U>
          ? K // the actual property names!!
          : T extends select<infer S, infer K>
          ? S[K]
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

      namespace type {
        type of<T>
          = T extends expression<infer U>
          ? expression<T>
          : T extends vector<infer U>
          ? U
          : T extends struct<infer K, infer U>
          ? T[keyof T]
          : T; //type<T>;
      }

      const to: {
        o: type.of<select<{1:string; aab:number}, 'aab'>>,
        p: type.of<select<{1:boolean}, 1>>,
        q: type.of<vector<number>>,
        r: type.of<boolean[]>,
        s: type.of<Array<string>>,
        t: type.of<{1:boolean;x:string}>
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
    }
  }
}














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
    
      /*

      namespace result {
        type false_t = 0;
        type true_t  = 1;
      }

      type is_dict<T, L = T, R = T> = select<
        pair<T, dict>,
        L,
        R
      >;

      type is_structure<T> = T extends t.dict
        ? result.true_t
        : result.false_t

      type o = { a: 123, b: 'xyz', 3.3: object, true: string, boolean: 'true', string; };
      type l = number[];

      type o0 = element<o, 'a'>
      type o1 = element<o, 'b'>
      type o2 = element<o, 3.3>
      type o3 = element<o, 'true'>
      type o4 = element<o, 'boolean'>
      type o5 = element<o, 'string'>

  
      type s = is_structure<o>
      type d = is_dict<o>
      type x = element<o, 1>
      type y = element<o, 2>
    */
