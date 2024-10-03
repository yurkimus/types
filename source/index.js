/**
 * @typedef { 'Undefined' | 'Null' | 'Symbol' | 'Boolean' | 'Number' | 'String' | 'Object' | 'Array' | 'Arguments' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'BigInt' | 'Date' | 'RegExp' | 'Map' | 'Set' | 'WeakMap' | 'WeakSet' | 'WeakRef' | 'Promise' | 'Generator' | 'Proxy' | 'Error' | 'EvalError' | 'RangeError' | 'ReferenceError' | 'SyntaxError' | 'TypeError' | 'URIError' | 'AggregateError' | 'Intl.Collator' | 'Intl.DateTimeFormat' | 'Intl.NumberFormat' | 'ArrayBuffer' | 'SharedArrayBuffer' | 'DataView' } Types
 */

/**
 * Gets the type of a value as a string.
 *
 * @see {@link is}, {@link isLike}
 *
 * @param {any} value
 *
 * @returns {Types}
 *
 * @example
 * ```javascript
 * type('Hello!') // returns 'String'
 * type(async () => {}) // returns 'AsyncFunction'
 * type(new URLSearchParams()) // returns 'URLSearchParams'
 * ```
 */
export var type = (value) =>
  Object.prototype
    .toString
    .call(value)
    .slice(8, -1)

/**
 * Compares provided type with a type of provided object
 *
 * @see {@link type}, {@link isLike}
 *
 * @param {Types} string
 * @param {any} value
 *
 * @returns {boolean}
 *
 * @example
 * ```javascript
 * is('String', 'abc') // returns true
 * is('Null', null) // returns true
 * is('Object', []) // returns false
 * ```
 */
export var is = (string, value) => type(value) === string
