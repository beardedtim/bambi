# bambi

> Like a ram, but softer

![Grrr....Serious](https://www.disneyclips.com/imagesnewb5/images/bambi_angry.gif)

[![Build Status](https://travis-ci.org/beardedtim/bambi.svg?branch=master)](https://travis-ci.org/beardedtim/bambi)

## API

* [always](#always)
* [assoc](#assoc)
* [curry](#curry)
* [defer](#defer)
* [dissoc](#dissoc)
* [identity](#identity)
* [map](#map)
* [path](#path)
* [pathOr](#pathOr)
* [prop](#prop)
* [propOr](#propOr)

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

Iterators over a data structures items and applies the passed function to each

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