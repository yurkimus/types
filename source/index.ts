type Types =
  | 'AggregateError'
  | 'Arguments'
  | 'Array'
  | 'ArrayBuffer'
  | 'AsyncFunction'
  | 'BigInt'
  | 'Boolean'
  | 'DataView'
  | 'Date'
  | 'Error'
  | 'EvalError'
  | 'FormData'
  | 'Function'
  | 'Generator'
  | 'GeneratorFunction'
  | 'Headers'
  | 'Intl.Collator'
  | 'Intl.DateTimeFormat'
  | 'Intl.NumberFormat'
  | 'Map'
  | 'Null'
  | 'Number'
  | 'Object'
  | 'Promise'
  | 'Proxy'
  | 'RangeError'
  | 'ReferenceError'
  | 'RegExp'
  | 'Request'
  | 'Response'
  | 'Set'
  | 'SharedArrayBuffer'
  | 'String'
  | 'Symbol'
  | 'SyntaxError'
  | 'TypeError'
  | 'Undefined'
  | 'URIError'
  | 'URL'
  | 'URLSearchParams'
  | 'WeakMap'
  | 'WeakRef'
  | 'WeakSet'

type InferPrototype<T extends keyof Types> = T extends 'AggregateError' ? AggregateError
  : T extends 'Arguments' ? IArguments
  : T extends 'Array' ? Array<any>
  : T extends 'ArrayBuffer' ? ArrayBuffer
  : T extends 'AsyncFunction' ? (...args: any[]) => Promise<any>
  : T extends 'BigInt' ? BigInt
  : T extends 'Boolean' ? Boolean
  : T extends 'DataView' ? DataView
  : T extends 'Date' ? Date
  : T extends 'Error' ? Error
  : T extends 'EvalError' ? EvalError
  : T extends 'FormData' ? FormData
  : T extends 'Function' ? Function
  : T extends 'Generator' ? Generator
  : T extends 'GeneratorFunction' ? GeneratorFunction
  : T extends 'Headers' ? Headers
  : T extends 'Intl.Collator' ? Intl.Collator
  : T extends 'Intl.DateTimeFormat' ? Intl.DateTimeFormat
  : T extends 'Intl.NumberFormat' ? Intl.NumberFormat
  : T extends 'Map' ? Map<any, any>
  : T extends 'Null' ? null
  : T extends 'Number' ? Number
  : T extends 'Promise' ? Promise<any>
  : T extends 'Proxy' ? typeof Proxy
  : T extends 'RangeError' ? RangeError
  : T extends 'ReferenceError' ? ReferenceError
  : T extends 'RegExp' ? RegExp
  : T extends 'Request' ? Request
  : T extends 'Response' ? Response
  : T extends 'Set' ? Set<any>
  : T extends 'SharedArrayBuffer' ? SharedArrayBuffer
  : T extends 'String' ? String
  : T extends 'Symbol' ? Symbol
  : T extends 'SyntaxError' ? SyntaxError
  : T extends 'TypeError' ? TypeError
  : T extends 'Undefined' ? undefined
  : T extends 'URIError' ? URIError
  : T extends 'URL' ? URL
  : T extends 'URLSearchParams' ? URLSearchParams
  : T extends 'WeakMap' ? WeakMap<any, any>
  : T extends 'WeakRef' ? WeakRef<any>
  : T extends 'WeakSet' ? WeakSet<any>
  // Low priority
  : T extends 'Object' ? Object
  // Default case
  : string

type InferType<T> = T extends AggregateError ? 'AggregateError'
  : T extends IArguments ? 'Arguments'
  : T extends Array<any> ? 'Array'
  : T extends ArrayBuffer ? 'ArrayBuffer'
  : T extends (...args: any[]) => Promise<any> ? 'AsyncFunction'
  : T extends BigInt ? 'BigInt'
  : T extends Boolean ? 'Boolean'
  : T extends DataView ? 'DataView'
  : T extends Date ? 'Date'
  : T extends Error ? 'Error'
  : T extends EvalError ? 'EvalError'
  : T extends FormData ? 'FormData'
  : T extends Function ? 'Function'
  : T extends Generator ? 'Generator'
  : T extends GeneratorFunction ? 'GeneratorFunction'
  : T extends Headers ? 'Headers'
  : T extends Intl.Collator ? 'Intl.Collator'
  : T extends Intl.DateTimeFormat ? 'Intl.DateTimeFormat'
  : T extends Intl.NumberFormat ? 'Intl.NumberFormat'
  : T extends Map<any, any> ? 'Map'
  : T extends null ? 'Null'
  : T extends Number ? 'Number'
  : T extends Promise<any> ? 'Promise'
  : T extends typeof Proxy ? 'Proxy'
  : T extends RangeError ? 'RangeError'
  : T extends ReferenceError ? 'ReferenceError'
  : T extends RegExp ? 'RegExp'
  : T extends Request ? 'Request'
  : T extends Response ? 'Response'
  : T extends Set<any> ? 'Set'
  : T extends SharedArrayBuffer ? 'SharedArrayBuffer'
  : T extends String ? 'String'
  : T extends Symbol ? 'Symbol'
  : T extends SyntaxError ? 'SyntaxError'
  : T extends TypeError ? 'TypeError'
  : T extends undefined ? 'Undefined'
  : T extends URIError ? 'URIError'
  : T extends URL ? 'URL'
  : T extends URLSearchParams ? 'URLSearchParams'
  : T extends WeakMap<any, any> ? 'WeakMap'
  : T extends WeakRef<any> ? 'WeakRef'
  : T extends WeakSet<any> ? 'WeakSet'
  // Low priority case
  : T extends Object ? 'Object'
  // Default case
  : string

/**
 * Gets the type of a value as a string.
 *
 * @see {@link is}
 *
 * @example
 * ```javascript
 * type('Hello!') // returns 'String'
 * type(async () => {}) // returns 'AsyncFunction'
 * type(new URLSearchParams()) // returns 'URLSearchParams'
 * ```
 */
export let type = <Value>(value: Value) =>
  Object.prototype
    .toString
    .call(value)
    .slice(8, -1) as InferType<Value>

/**
 * Compares provided type with a type of provided object
 *
 * @see {@link type}
 *
 * @example
 * ```javascript
 * is('String', 'abc') // returns true
 * is('Null', null) // returns true
 * is('Object', []) // returns false
 * ```
 */
export let is = <Type extends Types, Value extends unknown>(key: Type, value: Value): value is InferPrototype<Type> =>
  type(value) === key
