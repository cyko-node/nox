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

  namespace help {
    type property<T, Name extends type.key<{}>> = {
      [I in Name]: T;
    };

    type callable<T, Name extends type.key<{}>> = {
      [I in Name]:() => T;
    };

    type attributes
      = type.attr.defaults
      | type.attr.optional
      | type.attr.readonly;

    namespace property {
      type apply<T, Attr extends attributes>
        = [Attr] extends [type.attr.optional]
        ? { [Property in keyof T]+?: T[Property]; }
        : [Attr] extends [type.attr.readonly]
        ? { +readonly [Property in keyof T]: T[Property]; }
        : [Attr] extends [type.attr.optional | type.attr.readonly]
        ? { +readonly [Property in keyof T]+?: T[Property]; }
  
        : [Attr] extends [type.attr.defaults]
        ? { [Property in keyof T]: T[Property]; }
        : [Attr] extends [type.attr.optional | type.attr.defaults]
        ? { [Property in keyof T]+?: T[Property]; }
        : [Attr] extends [type.attr.readonly | type.attr.defaults]
        ? { +readonly [Property in keyof T]: T[Property]; }

        : never;

      type strip<T, Attr extends attributes>
        = [Attr] extends [type.attr.optional]
        ? { [Property in keyof T]-?: T[Property]; }
        : [Attr] extends [type.attr.readonly]
        ? { -readonly [Property in keyof T]: T[Property]; }
        : [Attr] extends [type.attr.optional | type.attr.readonly]
        ? { -readonly [Property in keyof T]-?: T[Property]; }
  
        : [Attr] extends [type.attr.defaults]
        ? { -readonly [Property in keyof T]-?: T[Property]; }
        : [Attr] extends [type.attr.optional | type.attr.defaults]
        ? { [Property in keyof T]-?: T[Property]; }
        : [Attr] extends [type.attr.readonly | type.attr.defaults]
        ? { -readonly [Property in keyof T]: T[Property]; }

        : never;
    }
  }

 /*
  +-------------------------------------------------------------------------•
  | The basics.
  +-------------------------------------------------------------------------•
  */

  global { namespace type {
    namespace base {

    }
    type key<T>
      = T extends help.vector ? number
      : T extends help.struct ? number|string|symbol : never;

    type vector<T = any> = T[];
    type struct<T = any, K extends key<{}> = key<{}>> = { [I in K]: T; };
  }}

 /*
  +-------------------------------------------------------------------------•
  | Properties / members
  +-------------------------------------------------------------------------•
  */

  global { namespace type {
    namespace attr {
      type defaults = '[defaults]';
      type optional = '[optional]';
      type readonly = '[readonly]';
    }

    namespace property {
      type apply<
        T extends help.property<unknown, key<{}>>,
        A extends help.attributes
      > = help.property.apply<T, A>;

      type strip<
        T extends help.property<unknown, key<{}>>,
        A extends help.attributes = attr.defaults
      > = help.property.strip<T, A>;
    }

    /**
     * Struct containing a single member.
     * @template T Type.
     * @template N Name.
     * @template A Attributes. See: {@linkcode type.attr }
     */

    type property<T,
      N extends key<{}>,
      A extends help.attributes = attr.defaults
    > = property.apply<help.property<T, N>, A>;

    /**
     * Struct containing a single method.
     * @template T Type.
     * @template N Name.
     * @template A Attributes. See: {@linkcode type.attr }
     */

    type callable<T,
      N extends key<{}>,
      A extends help.attributes = attr.defaults
    > = property.apply<help.callable<T, N>, A>;
  }}

 /*
  +-------------------------------------------------------------------------•
  | Testing
  +-------------------------------------------------------------------------•
  */

  global { namespace type { namespace internal {
    type t = {
      a: {
        a: property.apply<property<number, 'name'>, attr.optional>
      }
      c: {
        a: property<number, 'n', attr.defaults>
        b: property<number, 'n', attr.optional>
        d: property<number, 'n', attr.optional | attr.defaults>
        e: property<number, 'n', attr.optional | attr.readonly>
        f: property<number, 'n', attr.readonly>
        g: property<number, 'n', attr.readonly | attr.defaults>
        h: property<number, 'n', attr.readonly | attr.optional>
      }
      s: {
        a: property.strip<property<number, 'n', attr.defaults>,                 attr.optional>
        b: property.strip<property<number, 'n', attr.optional>,                 attr.defaults>
        d: property.strip<property<number, 'n', attr.optional | attr.defaults>, attr.optional>
        e: property.strip<property<number, 'n', attr.optional | attr.readonly>, attr.readonly>
        f: property.strip<property<number, 'n', attr.readonly>,                 attr.defaults>
        g: property.strip<property<number, 'n', attr.readonly | attr.optional>, attr.readonly>
        h: property.strip<property<number, 'n', attr.readonly | attr.optional>, attr.defaults>
      }
      x: {
        i: property<number, 'n', attr.optional>
        j: property<number, 'n', attr.defaults>
        k: property<number, 'n', attr.defaults>
        l: property<number, 'n', attr.defaults>
        m: property<number, 'n', attr.defaults>
        n: property<number, 'n', attr.defaults>
        o: property<number, 'n', attr.defaults>
      }
    }
  } } }

}
