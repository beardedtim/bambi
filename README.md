# bambi

> Like a ram, but softer

![Grrr....Serious](https://www.disneyclips.com/imagesnewb5/images/bambi_angry.gif)

[![Build Status](https://travis-ci.org/beardedtim/bambi.svg?branch=master)](https://travis-ci.org/beardedtim/bambi)

[![Coverage Status](https://coveralls.io/repos/github/beardedtim/bambi/badge.svg?branch=master)](https://coveralls.io/github/beardedtim/bambi?branch=master)

## API

* [adjust](#adjust)
* [always](#always)
* [assoc](#assoc)
* [both](#both)
* [clone](#clone)
* [compose](#compose)
* [composeP](#composeP)
* [curry](#curry)
* [dec](#dec)
* [deepClone](#deepClone)
* [defaultTo](#defaultTo)
* [defer](#defer)
* [dissoc](#dissoc)
* [equals](#equals)
* [F](#f)
* [filter](#filter)
* [gt](#gt)
* [gte](#gte)
* [identity](#identity)
* [ifElse](#ifElse)
* [inc](#inc)
* [isNil](#isNil)
* [lens](#lens)
* [lensPath](#lensPath)
* [lensProp](#lensProp)
* [lt](#lt)
* [lte](#lte)
* [map](#map)
* [not](#not)
* [once](#once)
* [path](#path)
* [pathEq](#pathEq)
* [pathOr](#pathOr)
* [pipe](#pipe)
* [prop](#prop)
* [propOr](#propOr)
* [random](#random)
* [reduce](#reduce)
* [reverse](#reverse)
* [set](#set)
* [T](#t)
* [uniq](#uniq)
* [uppercase](#uppercase)
* [view](#view)
* [zip](#zip)


### adjust

```
adjust: (a -> b) -> Int -> [a] -> [b]
```

```js
const fn = add(1)
const index = 1
const list = [0, 0, 0]
adjust(fn, index, list) // [0, 1, 0]
```

### always

```
always: a -> () -> a
```

```js
const obj = {}

always(obj)() === obj
```

Returns a function that always returns the passed in value.

### assoc

```
assoc: a -> string -> Obj -> Obj
```

```js
const obj = { name: 'Tim', age: 28 }
const birthdayAge = 29
const newObj = assoc(birthdayAge, 'age', obj)

newObj.age // 29
newObj.name // 'Tim'
```

Returns a shallow copy of the object, with the key associated with the value

### both

```
both: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
```

```js
const isTim = ({ name }) => name === 'Tim'
const isAdmin = ({ level }) => level === 'admin'

const person = {
  name: 'Tim',
  level: 'admin'
}

const canView = both(isTim, isAdmin)

canView(person) // true
canView({ name: 'John' }) // false
```

### clone

```
clone: a -> a
```

```js
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
compose: (b -> c) -> (a -> b) -> (a -> c)
```

```js
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

### composeP

```
composeP: (b -> Promise<c> | c) -> (a -> Promise<b> | b) -> (Promise<a> | a) -> Promise<c>
```

```js
const apiCall = Promise.resolve({ _id: 1, friends: [2], name: 'Tim' })
const getFriends = ({ friends }) =>
  Promise.resolve([{ _id: 2, name: 'John', friends: [1] }])

const upperCaseNames = map(
  compose(
    str => str.toUpperCase(),
    prop('name')
  )
)

const composed = composeP(upperCaseNames, getFriends)

composed(apiCall).then(console.log) // 'JOHN'
```

Composes functions that may or may not return a promise into a function that returns a promise, given a value

### cond

```
cond: ([[(a -> boolean), (a -> b)]]) -> a -> b
```

```js
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

```js
const fn = (a, b) => a + b
const curried = curry(fn)

curried()(1)()(2) // 3
```

Returns a wrapped version of the passed in function, returning functions until all of the arguments are given.

### dec

```
dec: number -> number
```

```js
dec(1) // 0
```

Returns the number passed in minus 1

### deepClone

```
deepClone: a -> a
```

```js
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

```js
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

```js
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

```js
const obj = { name: 'Tim', age: 28 }
const newObj = dissoc('name', obj)

newObj.age // 28
newObj.name // undefined

obj.age // 28
obj.name // 'Tim'
```

Returns a shallow copy, with the given key deleted

### equals

```
equals: a -> b -> Boolean
```

```js
const a = 1
const b = 1
const c = {}
const d = {}

equals(a, b) // true
equals(a, c) // false
equals(c, d )// false because {} !== {}
```

Returns whethere both values are strictly equal or not

### F

```
F: () -> boolean
```

```js
F() // false
```

Returns `false`


### gt

```
gt: number -> number -> boolean
```

```js
const a = 2
const b = 1

gt(a, b) // true
gt(b, a) // false
```
Returns whether the first value is greater than the second

### gte

```
gte: number -> number -> boolean
```

```js
const a = 2
const b = 1

gte(a, b) // true
gte(a, a) // true
gte(b, a) // false
```

Returns whether the first value is greater or equal to the second


### identity

```
identity: a -> a
```

```js
const obj = {}
const id = identity(obj)

id === obj
```
Returns the passed in value

### ifElse

```
ifElse: (a -> boolean) -> (a -> *) -> (a -> *) -> a -> *
```

```js
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

```js
inc(1) // 2
```

Returns the number plus one

### isNil

```
isNil: a -> Boolean
```

```js
isNil(undefined) // true
isNil(null) // true
isNil() // true
isNil('') // false
isNil(false) // false
isNil(123) // false
```

Returns true if passed `undefined` or `null`. Returns false otherwise

### lens

```
lens: (a -> *) -> (* -> a) -> Lens
```

```js
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

```js
const data = { name: 'Tim', location: { state: 'TN' } }
const stateLens = lensPath(['location', 'state')
const value = view(stateLens, data) // 'TN'
```

Returns a `Babmi`-style `lens` at the given path

### lensProp

```
lensProp: string | number -> Lens
```

```js
const data = { name: 'Tim' }
const nameLens = lensProp('name')
const value = view(nameLens, data) // 'Tim'
```

### lt

```
lt: number -> number -> boolean
```

```js
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

```js
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

```js
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

```js
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

```js
const data = { name: 'Tim', age: 29 }
const nameLens = lensProp('name')
const updated = over(nameLens, oldName => 'John', data) // { name: 'John', age: 29 }
```

Returns the data structure passed in, with the value at the `lens` updated

### once

```
once: (* -> *) -> * -> *
```

```js
let count = 0
const fn = () => count++
const oner = once(fn)

oner() // 1
oner() // 1
count // 2
```

Returns a function that will call the passed in function only once, always returning the given value

### path


```
path: Array<string|number> -> DataStructure -> a
```

```js
const obj = { name: 'Tim', location: { city: 'SF', area: ['CA'] } }
const area = path(['location', 'area', 0], obj)

area === 'CA'
``` 

Returns the value at the path, walking the data structure

### pathEq

```
pathEq: Array<string | number> -> a -> b -> Boolean
```

```js
const data = {
  location: {
    city: 'Cookeville'
  }
}

const path = ['location', 'city']
const value = 'Cookeville'

pathEq(path, value, data) // true
```

Returns whether or not a path is equal to a value inside of an object or not

### pathOr


```
pathOr: a -> Array<string|number> -> DatStructure -> a
```

```js
const obj = {}
const value = pathOr(1, [1,2, 3], obj)

value === 1
```

Returns the value at the path or the passed in default

### pipe

```
pipe: (a -> b) -> (b -> c)
```

```js
const add1 = v => v + 1
const add2 = v => v + 2

const adder = pipe(add1, add2)

adder(0) // 3
```

Returns a function that is the functions passed in, called in right-to-left order.

### pipeP

```
pipe: (a -> Promise<b> | b) -> (b -> Promise<c> | c) -> (Promise<a> | a) -> Promise<c>
```

```js
const apiCall = Promise.resolve({ _id: 1, friends: [2] })
const getFriends = ({ friends }) => Promise.resolve([{ _id: 2, name: 'John' }])
const toUpperCase = str => str.toUpperCase()

const piped = pipeP(getFriends, toUpperCase)

pipe.then(console.log) // ['JOHN']
```

### prop


```
prop: (string|number) -> DataStructure -> a
```

```js
const obj = { name: 'Tim' }
const value = prop('name', obj)

value === 'Tim'
```

Returns the value at the given key

### propEq

```
propEq: (string | number) -> a -> b -> Boolean
```

```js
const data = { name: 'Tim' }
const prop = 'name'
const value = 'John'

propEq(prop, value, data) // false
```

Returns whether or not a prop is equal to a value inside of an object

### propOr

```
propOr: a -> (string|number) -> DataStructure -> a
```


```js
const obj = { name: 'Tim' }
const name = propOr('default', 'name', obj)
const age = propOr('default', 'age', obj)

name // 'Tim'
age // 'default'
```

Returns the value at the prop or the default

### random

```
random: number -> number -> Integer
```

```js
const min = 1
const max = 10
random(min, max) // random integer between 1 - 10
```

Returns a random number between the min/max inclusively.


### reduce

```
reduce: (a -> b -> c) -> a -> a[] -> c
```

```js
const reducer = (acc, curr) => acc + curr
const initialState = 0
const list = [1, 2, 3]
reduce(reducer, initialState, list) // 6
```

Reduce a list into a single value given a reducer function.

### reverse

```
reverse: (Array<a> | string) -> Array<a> | string
```

```js
const list = [1, 2, 3]

reverse(list) // [3, 2, 1]

const str = 'abc'

reverse(str) // 'cba'
```

Returns a shallow copy of the passed in list or string but in reverse order

### T

```
T: () -> boolean
```

```js
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

```js
const arr = [1, 2, 3, 1]
uniq(arr) //  [1, 2, 3]
```

Returns a copy of the passed in array, with only unique values.

### uppercase

```
uppercase: string -> string
```

```js
const name = 'tim'
uppercase(name) // 'TIM'
```

Returns the uppercased version of the passed string

### view

```
view: Lens -> a -> *
```

```js
const data = { name: 'Tim' }
const nameLens = lensProp('name')
const value = view(nameLens, data) // 'Tim'
```

Allows for reading or viewing of a Bambi-style lens

### zip

```
zip: (a -> b -> c) -> [a] -> [b] -> [c]
```

```js
const list1 = [1, 2, 3]
const list2 = [1, 1, 1]
const zipped = zip(add, list1, list2) // [2, 3, 4]
```

Mixes two arrays by a given function