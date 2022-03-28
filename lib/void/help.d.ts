namespace help {

  enum encodingEnum {
    ascii     = 'ascii',
    base64    = 'base64',
    base64url = 'base64url',
    binary    = 'binary',
    hex       = 'hex',
    latin1    = 'latin1',
    latin     = 'latin1',
    ucs2      = 'ucs2',    // Universal Character Set (2-byte)
    utf8      = 'utf8',    // Unicode Transformation Format, extends ASCII, variable-width encoding, Transforms / Encodes: ISO 10646 (Unicode)
    utf16le   = 'utf16le', // Unicode Transformation Format, extends UCS-2, variable-width encoding, Transforms / Encodes: ISO 10646 (Unicode)
    default   = 'utf8'
  }

  type encodingUnion
    = 'ascii'
    | 'base64'
    | 'base64url'
    | 'binary'
    | 'hex'
    | 'latin1'
    | 'ucs2'
    | 'utf8'
    | 'utf16le'
    | 'utf8';

  type encodingEInterface = {
    [key in encodingEnum]: string;
  }
  type encodingUInterface = {
    [key in encodingUnion]: string;
  }

  let encodingExample: encodingEInterface = {
      [encodingEnum.ascii]:  'true',
      [encodingEnum.hex]:    'false',
      [encodingEnum.binary]: 'true'
  }
}
