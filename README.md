# bambi

> Like a ram, but softer

![Grrr....Serious](https://www.disneyclips.com/imagesnewb5/images/bambi_angry.gif)

[![Build Status](https://travis-ci.org/beardedtim/bambi.svg?branch=master)](https://travis-ci.org/beardedtim/bambi)

[![Coverage Status](https://coveralls.io/repos/github/beardedtim/bambi/badge.svg?branch=master)](https://coveralls.io/github/beardedtim/bambi?branch=master)

## API

* [always](#always)
* [assoc](#assoc)
* [clone](#clone)
* [compose](#compose)
* [curry](#curry)
* [dec](#dec)
* [deepClone](#deepClone)
* [defaultTo](#defaultTo)
* [defer](#defer)
* [dissoc](#dissoc)
* [F](#f)
* [filter](#filter)
* [gt](#gt)
* [gte](#gte)
* [identity](#identity)
* [ifElse](#ifElse)
* [inc](#inc)
* [lens](#lens)
* [lensPath](#lensPath)
* [lensProp](#lensProp)
* [lt](#lt)
* [lte](#lte)
* [map](#map)
* [not](#not)
* [path](#path)
* [pathOr](#pathOr)
* [pipe](#pipe)
* [prop](#prop)
* [propOr](#propOr)
* [reduce](#reduce)
* [set](#set)
* [T](#t)
* [uniq](#uniq)
* [uppercase](#uppercase)
* [view](#view)
* [zip](#zip)

### always

```
always: a -> () -> a
```

```
const obj = {}

always(obj)() === obj
```

Returns a function that always returns the passed in value.

### assoc

```
assoc: a -> string -> Obj -> Obj
```

```
const obj = { name: 'Tim', age: 28 }
const birthdayAge = 29
const newObj = assoc(birthdayAge, 'age', obj)

newObj.age // 29
newObj.name // 'Tim'
```

Returns a shallow copy of the object, with the key associated with the value

### clone

```
clone: a -> a
```

```
const arr = [1, 2, 3]
const cloned = clone(arr) // [1, 2, 3]

cloned === arr // false
cloned[0] === arr[0] // true

const obj = { k: v }
const clonedObj = clone(obj)

clonedObj === obj // false
clonedObj.k === obj.k // true
```

Performs a shallow clone of an array or object.

### compose

```
compose: (a -> b) -> (b -> c) -> (a -> c)
```

```
const getName = data => data.name
const uppercase = str => str.toUpperCase()

const getUpperCaseName = compose(
  uppercase,
  getName
)

const data = { name: 'Tim' }

getUpperCaseName(data) // 'TIM'
```

Composes functions together into a single unary function, calling the passed in functions right-to-left order.

### cond

```
cond: ([[(a -> boolean), (a -> b)]]) -> a -> b
```

```
const conditions = cond([
  [obj => obj.name === 'tim', obj => obj.name.toUpperCase()],
  [obj => obj.name === 'john', obj => obj.name.split('').reverse().join('')]
])

const tim = { name: 'tim' }
const john =  { name: 'john' }

conditions(tim) // 'TIM'
conditions(john) // 'NHOJ'
```

Applies the transformation function given at the first predicate that returns truthy

### curry


```
curry: ((a, b) -> c) -> (a -> b -> c)
```

```
const fn = (a, b) => a + b
const curried = curry(fn)

curried()(1)()(2) // 3
```

Returns a wrapped version of the passed in function, returning functions until all of the arguments are given.

### dec

```
dec: number -> number
```

```
dec(1) // 0
```

Returns the number passed in minus 1

### deepClone

```
deepClone: a -> a
```

```
const arr = [{k: v}]
const cloned = deepClone(arr)

cloned === arr // false
cloned[0] === arr[0] // false

const obj = { k: { k: v} }
const clonedObj = deepClone(obj)

clonedObj === obj // false
clonedObj.k === obj.k // false
```

Performs a deep cloning of an object, recursively until getting to primitives.

### defaultTo

```
defaultTo: a -> b -> a | b
```

```
const value = true
const other = undefined
const defaulted = 'tim'

defaulted(value) // true
defaulted(other) // 'tim'
```

Returns the passed in value if that value is not `null` or `undefined`. Returns the default value is not

### defer


```
defer: Array<a> -> (a -> b) -> () -> b
```

```
const fn = a => console.log(a)
const defered = defer([1], fn)
const value = defered()

value // 1
```

Returns a function that will apply a function with the given arguments

### dissoc


```
dissoc: string -> Obj -> Obj
```

```
const obj = { name: 'Tim', age: 28 }
const newObj = dissoc('name', obj)

newObj.age // 28
newObj.name // undefined

obj.age // 28
obj.name // 'Tim'
```

Returns a shallow copy, with the given key deleted

### gt

```
gt: number -> number -> boolean
```

```
const a = 2
const b = 1

gt(a, b) // true
gt(b, a) // false
```

### gte

```
gte: number -> number -> boolean
```

```
const a = 2
const b = 1

gte(a, b) // true
gte(a, a) // true
gte(b, a) // false
```

### F

```
F: () -> boolean
```

```
F() // false
```

Returns `false`

### identity


```
identity: a -> a
```

```
const obj = {}
const id = identity(obj)

id === obj
```

Returns the passed in value

### ifElse

```
ifElse: (a -> boolean) -> (a -> *) -> (a -> *) -> a -> *
```

```
const hasAge = data => 'age' in data
const double = num => num * 2
const defaultAge = () => 30

const getAge = ifElse(
  hasAge,
  data => double(data.age),
  defaultAge
)

getAge({}) // 30
getAge({ age: 1 }) // 1 
```

Returns the value of the second argument if the first function returns truthy, returns the third argument if not

### inc

```
inc: number -> number
```

```
inc(1) // 2
```

Returns the number plus one

### lens

```
lens: (a -> *) -> (* -> a) -> Lens
```

```
const data = { name: 'Tim', age: 29 }
const nameLens = lens(
  prop('name'),
  assoc('name')
) // { get: prop('name'), set: assoc('name') }
```

Returns a `Bambi`-style `lens` object for using in `set`, `over`, and `view`.

### lensPath

```
lensPath: [string | number] -> Lens
```

```
const data = { name: 'Tim', location: { state: 'TN' } }
const stateLens = lensPath(['location', 'state')
const value = view(stateLens, data) // 'TN'
```

Returns a `Babmi`-style `lens` at the given path

### lensProp

```
lensProp: string | number -> Lens
```

```
const data = { name: 'Tim' }
const nameLens = lensProp('name')
const value = view(nameLens, data) // 'Tim'
```

### lt

```
lt: number -> number -> boolean
```

```
const a = 1
const b = 2
lt(a, b) // true
lt(b, a) // false
```

Returns true if the first value is less than the second, false if otherwise

### lte

```
lte: number -> number -> boolean
```

```
const a = 1
const b = 2
lte(a, b) // true
lte(a, a) // true
lte(b, a) // false
```

### map


```
map: (a -> b) -> Iterator -> Iterator
```

```
const list = [1, 2, 3]
const fn = a => a * 2

map(fn, list) // [2, 4, 6]

const obj = { a: 1, b: 2, c: 3 }

map(fn, obj) // { a: 2, b: 4, c: 6 }
```

Iterates over a data structures items and applies the passed function to each


### not

```
not: (a -> b) -> args -> Boolean
```

```
const fn = () => false
const notFn = not(fn)

notFn() // true

const otherFn = () => true
const notOther = not(otherFn)

notOther() // false
```

Returns a function that returns the opposite Boolean value as the passed in function

### over

```
over: Lens -> (a -> b) -> * -> *
```

```
const data = { name: 'Tim', age: 29 }
const nameLens = lensProp('name')
const updated = over(nameLens, oldName => 'John', data) // { name: 'John', age: 29 }
```

Returns the data structure passed in, with the value at the `lens` updated

### path


```
path: Array<string|number> -> DataStructure -> a
```

```
const obj = { name: 'Tim', location: { city: 'SF', area: ['CA'] } }
const area = path(['location', 'area', 0], obj)

area === 'CA'
``` 

Returns the value at the path, walking the data structure

### pathOr


```
pathOr: a -> Array<string|number> -> DatStructure -> a
```

```
const obj = {}
const value = pathOr(1, [1,2, 3], obj)

value === 1
```

Returns the value at the path or the passed in default

### prop


```
prop: (string|number) -> DataStructure -> a
```

```
const obj = { name: 'Tim' }
const value = prop('name', obj)

value === 'Tim'
```

Returns the value at the given key

### propOr

```
propOr: a -> (string|number) -> DataStructure -> a
```


```
const obj = { name: 'Tim' }
const name = propOr('default', 'name', obj)
const age = propOr('default', 'age', obj)

name // 'Tim'
age // 'default'
```

Returns the value at the prop or the default

### T

```
T: () -> boolean
```

```
T() // true
```

Returns `true`

### set

```
set: Lens -> * -> a -> a
```

```
const data = { name: 'Tim', age: 29 }
const nameLens = lensProp('name')
const updated = set(nameLens, 'Joh', data) // { name: 'John', age: 29 }
```

Sets the value at the location pointed to by the lens.

### uniq

```
uniq: Array<T> -> Array<T>
```

```
const arr = [1, 2, 3, 1]
uniq(arr) //  [1, 2, 3]
```

Returns a copy of the passed in array, with only unique values.

### uppercase

```
uppercase: string -> string
```

```
const name = 'tim'
uppercase(name) // 'TIM'
```

### view

```
view: Lens -> a -> *
```

```
const data = { name: 'Tim' }
const nameLens = lensProp('name')
const value = view(nameLens, data) // 'Tim'
```

### zip

```
zip: (a -> b -> c) -> [a] -> [b] -> [c]
```

```
const list1 = [1, 2, 3]
const list2 = [1, 1, 1]
const zipped = zip(add, list1, list2) // [2, 3, 4]
```