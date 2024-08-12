# Types

JavaScript-first utilities to work with it's built-in types.

Functions with arity more than 1 are curried.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [type](#type)
  - [is](#is)
  - [isLike](#isLike)
- [License](#license)

## Installation

### npm

```
npm install @yurkimus/types
```

### urls

```
"@yurkimus/types": "npm:@yurkimus/types"
```

```
"@yurkimus/types": "github:yurkimus/types"
```

```
"@yurkimus/types": "https://raw.githubusercontent.com/yurkimus/types/main/source/index.js"
```

## Exports

### type

#### Definition:

```
type :: * -> string
```

#### Example:

```javascript
type({}) // => 'Object'
```

### is

#### Definition:

```
is :: string -> * -> boolean
```

#### Example:

```javascript
// Standard
is('Object', {}) // => true

// Curried
is('Array')([]) // => true
```

### isLike

#### Definition:

```
isLike :: string -> * -> boolean
```

#### Example:

```javascript
// Standard
isLike("Iterable", []) // => true

// Curried
isLike("URL")(window.location) // => true
```

## License

[MIT](LICENSE)
