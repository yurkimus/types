# Types

JavaScript-first utilities to work with it's built-in types.

## Table of Contents

- [Installation](#installation)
- [Functions](#functions)
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

## Functions

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
is('Object', {}) // => true
```

### isLike

#### Definition:

```
isLike :: string -> * -> boolean
```

#### Example:

```javascript
isLike('Iterable', []) // => true
```

## License

[MIT](LICENSE)
