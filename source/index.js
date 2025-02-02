import { curry } from '@yurkimus/curry'

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
export let type = value =>
  Object.prototype
    .toString
    .call(value)
    .slice(8, -1)

/**
 * Compares provided type with a type of provided object
 *
 * @see {@link type}
 *
 * @example
 * ```javascript
 * is('String', 'abc') // returns true
 * is('Null', null) // returns true
 * is('Object')([]) // returns false
 * ```
 */
export let is = curry((key, value) => type(value) === key)
