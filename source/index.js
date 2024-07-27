/**
 * @module
 *
 * This module contains simple utilities to get the type of any value and to know if provided type satisfies or exactly matching the value's type.
 */

var cache = new WeakMap()

/**
 * Gets the type of a value as a string.
 *
 * @see {@link is}, {@link isLike}
 *
 * @param {any} value
 *
 * @returns {string}
 *
 * @example
 * ```javascript
 * type('Hello!') // returns 'String'
 * type(async () => {}) // returns 'AsyncFunction'
 * type(new URLSearchParams()) // returns 'URLSearchParams'
 * ```
 */
export var type = (value) => {
  switch (value instanceof Object) {
    case true:
      return cache.has(value)
        ? cache.get(value)
        : cache
            .set(value, Object.prototype.toString.call(value).slice(8, -1))
            .get(value)

    case false:
      return Object.prototype.toString.call(value).slice(8, -1)
  }
}

/**
 * Compares provided type with a type of provided object
 *
 * @see {@link type}, {@link isLike}
 *
 * @param {string} string
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
export var is = (string, value) => type(value) == string

/**
 * Tests if the provided value satisfies provided interface
 *
 * @see {@link type}, {@link is}
 *
 * @param {string} string
 * @param {any} value
 *
 * @returns {boolean}
 *
 * @throws {TypeError} Check for * is not implemented
 *
 * @example
 * ```javascript
 *  isLike('Array', { length: 3 }) // returns true
 *  isLike('URL', window.location) // returns true
 *  isLike('Function', { call: 'me' }) // returns false
 * ```
 */
export var isLike = (string, value) => {
  switch (string) {
    case 'Promise':
      return value && 'then' in value && isLike('Function', value.then)

    case 'Array':
      return value && 'length' in value

    case 'URL':
      return URL.canParse(value)

    case 'Function':
      return (
        value &&
        'call' in value &&
        typeof value.call == 'function' &&
        'length' in value
      )

    default:
      throw new TypeError(`Check for ${string} is not implemented`)
  }
}
