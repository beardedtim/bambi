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
* [path](#path)
* [pathOr](#pathOr)
* [prop](#prop)
* [propOr](#propOr)

### always

```
const obj = {}

always(obj)() === obj
```

Returns a function that always returns the passed in value.

### assoc

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
const fn = (a, b) => a + b
const curried = curry(fn)

curried()(1)()(2) // 3
```

Returns a wrapped version of the passed in function, returning functions until all of the arguments are given.

### defer

```
const fn = a => console.log(a)
const defered = defer([1], fn)
const value = defered()

value // 1
```

Returns a function that will apply a function with the given arguments

### dissoc

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
const obj = {}
const id = identity(obj)

id === obj
```

Returns the passed in value

### path

```
const obj = { name: 'Tim', location: { city: 'SF', area: ['CA'] } }
const area = path(['location', 'area', 0], obj)

area === 'CA'
``` 

Returns the value at the path, walking the data structure

### pathOr

```
const obj = {}
const value = pathOr(1, [1,2, 3], obj)

value === 1
```

Returns the value at the path or the passed in default

### prop

```
const obj = { name: 'Tim' }
const value = prop('name', obj)

value === 'Tim'
```

Returns the value at the given key

### propOr

```
const obj = { name: 'Tim' }
const name = propOr('default', 'name', obj)
const age = propOr('default', 'age', obj)

name // 'Tim'
age // 'default'
```

Returns the value at the prop or the default