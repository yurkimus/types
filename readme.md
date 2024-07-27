# Type Utilities Module

This module contains simple utilities to get the type of any value and to check if the provided type satisfies or exactly matches the value's type.

## Overview

### Cache

A [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) is used to cache the results of type checks for object instances to improve performance.

### Example

```javascript
import { type, is, isLike } from '@yurkimus/types'

type('Hello!') // => 'String'
type(async () => {}) // => 'AsyncFunction'
type(new URLSearchParams()) // => 'URLSearchParams'

is('String', 'abc') // => true
is('Null', null) // => true
is('Object', []) // => false

isLike('Array', { length: 3 }) // => true
isLike('URL', window.location) // => true
isLike('Function', { call: 'me' }) // => false
```

### Error Handling

The `isLike` function throws a [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the check for the provided interface is not implemented.

## Functions

### `type`

Gets the type of a value as a string.w

**Parameters:**

- `value` (any): The value whose type is to be determined.

**Returns:**

- `string`: The type of the value.

**Examples:**

```javascript
type('Hello!') // => 'String'
type(async () => {}) // => 'AsyncFunction'
type(new URLSearchParams()) // => 'URLSearchParams'
```

### `is`

Compares the provided type with the type of the provided value.

**Parameters:**

- `string` (string): The type to compare.
- `value` (any): The value whose type is to be compared.

**Returns:**

- `boolean`: True if the type matches, false otherwise.

**Examples:**

```javascript
is('String', 'abc') // => true
is('Null', null) // => true
is('Object', []) // => false
```

### `isLike`

Tests if the provided value satisfies the provided interface.

**Parameters:**

- `string` (string): The interface to check against.
- `value` (any): The value to be tested.

**Returns:**

- `boolean`: True if the value satisfies the interface, false otherwise.

**Throws:**

- `TypeError`: If the check for the provided interface is not implemented.

**Examples:**

```javascript
isLike('Array', { length: 3 }) // => true
isLike('URL', window.location) // => true
isLike('Function', { call: 'me' }) // => false
```

## Contributions

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
