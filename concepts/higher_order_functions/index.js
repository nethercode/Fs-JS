// function declaration or statement (always hoisted)
function saySomething(message) {
    return message;
}
console.log(saySomething('something')); // something

// function expression
const say = function(message) {
    return message;
}
console.log(say('hi')); // hi

// anonymous function
arr = [1,2,3];
const anon = arr.map(function(val) {
    return val * 2;
});
console.log(anon); // [ 2, 4, 6 ]

// higher order function (takes function as an argument)
function fnWrapper(callback) {
    callback('called by wrapper');
}
console.log(fnWrapper(say)); // undefined

fnWrapper(m => console.log(m)); // called by wrapper

// higher order function (returns a function)
function funCreator() {
    return function(message) {
        return message;
    }
}

const x = funCreator;
console.log(x); // [Function: funCreator]
console.log(x('hi')); // [Function (anonymous)]

const y = funCreator();
console.log(y('hi')); // hi
