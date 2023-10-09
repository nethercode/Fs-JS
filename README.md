# Fireship's Modern JavaScript Full Course
[Link](https://fireship.io/courses/js/)

JavaScript is a high-level, single-threaded, garbage-collected, interpreted || just-in-time (JIT) compiled, prototype-based, multi-paradigm, dynamic language with a non-blocking event loop. It is the only language, other than WebAssembly, that is natively supported in browsers. The standard implementation is called EcmaScript.

## Section

### Prerequisites
1. `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
2. `source ~/.bashrc`
3. `nvm install --lts`

### Module Bundlers
- Vite
- Webpack

### Defining Variables
<u>Keyword(s)</u>

- `var` 
- `let` (can be reassigned)
- `const` (can not be reassigned)

*The lexical environment will determine where and how variables work* <br>
*Global scope variables will be available everywhere* <br>
*Variables defined inside a function will become local to that function and not usable outside of it* <br>
*Inside the brackets (block) of a statement such as an `if` condition, variables will become block scoped* <br>
*Using `var` inside statement braces is not block scope and will be hoisted up to the local scope of a function*

### Primatives
- string
- number
- bigint
- boolean
- undefined
- symbol
- null

*Variables defined without an assignment automatically used the `undefined` type*
*Any value that is not a primitive will inherit from the object class (if not a primative, then it is an object)*

### Defining Functions
<u>Keyword(s)</u>

- `function`

```js
// Define a function named 'add' with input parameters of 'a' and 'b'
function add(a, b) {
    return a + b; // return a value that can be used somewhere else
}
```
*Functions are just objects which means they can also be used as expressions...* <br>
*...allowing them to be used as variables...*
```js
const add = function(a, b) {
    return a + b;
}
```
*...or, to construct higher-order functions where a function is used as an argument or a return value*
```js
function higherOrder(fun) {
    fun();
    return function () {
    }
}
```
*functions can also be nested to create a closure that encapsulates data and logic from the rest of a program*
```js
function myClosure () {
    let a = 10;
    return function () {
        a++
        return a;
    }
}
```
*normally, when you call a function that has a variable with a primitive value it's stored on the call stack (browser's short-term memory)* <br>
*when you create a closure, the inner function can still access variables in the outer function, even after the initial function call* <br>
*this happens because javascript automatically stores the data in the outer function on the heap memory which persists between function calls*

### `this` and `bind`
*`this` is a keyword that references an object based on how a function is called*
*when called from global scope, it references the window object in the browser*
*if the function is attached to and called by an object `this` will be a reference to that object*

*you can manually bind a function to some other object using the bind method*

### Arrow Functions

*arrow functions do not have their own `this` value and are always anonymous*
*because of their attributes they are ideal for function expressions*
```js
const obj = {
    someFn: function () => {
        console.log(this)
    }
}
```

### Argument Passing

*Primatives are passed by value (a copy is created of the original variable)*
*Objects are stored in the heap and are passed by reference (multiple parts of the code might be mutating the same object)*

```js
const num = 23;
const obj = new Object();

someFn(num, obj);
```

### Operators

`==` Abstract comparison (type comparison, then actual comparison; not recommended)
`===` Strict equality (type and value comparison)
`&&` Logical AND
`||` Logical OR

### Truthy & Falsy

Empty object
`console.log(!! {})` true
Empty array
`console.log(!! [])` true
String with length
`console.log(!! 'text')` true
Non-zero number
`console.log(!! 999)` true

String with no length
`console.log(!! '')` false
Number zero
`console.log(!! 0)` false

### Object Syntax

*Object literal*
```js
const obj = {
    name: 'Dog',
    color: 'Red',
    size: 'Big',
    time: Date.now(),
    do() {
        console.log('Doing');
    }
}
```
*Object constructor*
```js
const obj = new Object();
```
*Key-value pairs of objects are called properties*

*Objects can inherit properties from each other due to a mechanism known as the prototype chain*
```js
obj.__proto__.__proto__; // Do not use this in real life
// OR
Object.getPrototypeOf(obj); // Use this (recommended)
```

### OOP Class
-`class`
*classes are just "syntactic sugar" for object prototypal inheritance* 
*a class can define a constructor which is a function that is called when the object is first created*
*constructors can also have properties and optionally create getters and setters*
```js
class Thing {
    constructor(name) {
        this.exists = 'Yes';
        this.name = name;
        this.color = 'Red';
    }

    get color() {
        return this.color;
    }

    set color(val) {
        this.color = val;
    }

    // Method on an object instance (Instance method)
    do() {
        console.log('doing');
    }

    // Use keyword `static` to make global to the class name
    static doesExist(thing) {
        if (thing.exists == 'Yes') {
            return true;
        }
    }
}
```

### Built-in data structures

*Array for holding a dynamic collection of indexed items*
`const list = ['foo', 'bar', 'bar']`
*Set for holding a collection of unique items*
`const uniq = new Set(list)`
*Map to also hold a key-value pair like an object but easier to loop over and more*
```js
const dict = new Map([
    ['foo', 1],
    ['bar', 2]
])
```
*WeakMap([]) and WeakSet()*
*Garbage Collection*

### Non-blocking Event Loop
*normally, code in a script is executed synchronously (line-by-line)*
*this means the next line can not start until the previous line finishes*

*the event loop allows for writing asynchronous code that runs in a separate thread pool while the rest of the application continues to execute*
*this is important in the context of modern websites with multiple things going on at the same time, while only having access to a single thread for computing (the main thread)*
*without asynchronous code, it would be impossible to multitask*

```js
// Callback function
setTimeout(() => {
    console.log('After 5 seconds');
}, 5000);
```
*Function enqueued in the event loop and only called back later when ready to be executed on the main thread*
*Deeply nested callback functions create "Callback hell"*
```js
// Nested callback functions
setTimeout(() => {
    console.log('After 5 seconds');
    setTimeout(() => {
        console.log('After 10 seconds');
        setTimeout(() => {
            console.log('After 15 seconds');
        }, 5000);
    }, 5000);
}, 5000);
```
@8:17 "Promises"
