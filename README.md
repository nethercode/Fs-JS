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

### Primitive Data Types
- string
- number
- bigint
- boolean
- undefined
- symbol
- null

*Variables defined without an assignment automatically used the `undefined` type*
*Any value that is not a primitive will inherit from the object class*

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

### arrow functions