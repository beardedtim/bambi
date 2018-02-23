# bambi

> Like a ram, but softer

![Grrr....Serious](https://www.disneyclips.com/imagesnewb5/images/bambi_angry.gif)

[![Build Status](https://travis-ci.org/beardedtim/bambi.svg?branch=master)](https://travis-ci.org/beardedtim/bambi)

## API

* [always](#always)
* [assoc](#assoc)
* [clone](#clone)
* [compose](#compose)
* [curry](#curry)
* [deepClone](#deepClone)
* [defer](#defer)
* [dissoc](#dissoc)
* [filter](#filter)
* [identity](#identity)
* [lens](#lens)
* [lensPath](#lensPath)
* [lensProp](#lensProp)
* [map](#map)
* [not](#not)
* [path](#path)
* [pathOr](#pathOr)
* [pipe](#pipe)
* [prop](#prop)
* [propOr](#propOr)
* [reduce](#reduce)
* [set](#set)
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

### set

```
set: Lens -> * -> a -> a
```

```
const data = { name: 'Tim', age: 29 }
const nameLens = lensProp('name')
const updated = set(nameLens, 'Joh', data) // { name: 'John', age: 29 }
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