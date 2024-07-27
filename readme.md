# Type Utilities Module

This module contains simple utilities to get the type of any value and to check if the provided type satisfies or exactly matches the value's type.

## Module Overview

### Cache

A `WeakMap` is used to cache the results of type checks for object instances to improve performance.

## Usage

This module can be used to determine the type of any value and to verify if a value matches a specific type or interface. It's useful for type checking in JavaScript applications.

### Example

```javascript
import { type, is, isLike } from 'path/to/module'

console.log(type('Hello!')) // 'String'
console.log(type(async () => {})) // 'AsyncFunction'
console.log(type(new URLSearchParams())) // 'URLSearchParams'

console.log(is('String', 'abc')) // true
console.log(is('Null', null)) // true
console.log(is('Object', [])) // false

console.log(isLike('Array', { length: 3 })) // true
console.log(isLike('URL', window.location)) // true
console.log(isLike('Function', { call: 'me' })) // false
```

## Error Handling

The `isLike` function throws a `TypeError` if the check for the provided interface is not implemented.

## Functions

### `type(value)`

Gets the type of a value as a string.w

**Parameters:**

- `value` (any): The value whose type is to be determined.

**Returns:**

- `string`: The type of the value.

**Examples:**

```javascript
type('Hello!') // returns 'String'
type(async () => {}) // returns 'AsyncFunction'
type(new URLSearchParams()) // returns 'URLSearchParams'
```

### `is(string, value)`

Compares the provided type with the type of the provided value.

**Parameters:**

- `string` (string): The type to compare.
- `value` (any): The value whose type is to be compared.

**Returns:**

- `boolean`: True if the type matches, false otherwise.

**Examples:**

```javascript
is('String', 'abc') // returns true
is('Null', null) // returns true
is('Object', []) // returns false
```

### `isLike(string, value)`

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
isLike('Array', { length: 3 }) // returns true
isLike('URL', window.location) // returns true
isLike('Function', { call: 'me' }) // returns false
```

## Contributions

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

---

This README provides an overview of the module's functionality, usage examples, and details on the API. You can customize and expand it based on your specific needs and preferences.
