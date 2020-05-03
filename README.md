# cheesenan
CheeseNaN allows you to truly test if a variable isNaN 

## isNaN() is broken

```javascript
isNaN('') // false
isNaN(' ') // false

isNaN(null) // false
isNaN(undefined) // true

isNaN(true) // false
isNaN(false) // false

isNaN([]) // false
isNaN({}) // true

{} + [] // 0
isNaN({} + []) // should be equivalent to isNaN(0), but returns true instead
[] + {} // "[object Object]"
isNaN([] + {}) // true
```

## Number.isNaN() is broken

```javascript
Number.isNaN('') // false
Number.isNaN(' ') // false

Number.isNaN(null) // false
Number.isNaN(undefined) // false

Number.isNaN(true) // false
Number.isNaN(false) // false

Number.isNaN([]) // false
Number.isNaN({}) // false

{} + [] // 0
Number.isNaN({} + []) // false
[] + {} // "[object Object]"
Number.isNaN([] + {}) // false
```

## So here's a convenient test

```javascript
let value = // whatever you want
console.log(cheeseNaN(value));
```