const dog = {
    name: 'fido',
    age: '3',
    bark() {
        console.log('woof');
    }
}

const name = dog.name;
console.log(name); // output: fido

const age = dog.age;
console.log(age); // output: 3

const { name: dogName, age: dogAge } = dog;
console.log(dogName); // output: fido
console.log(dogAge); // output: 3


const arr = ['foo', 'bar', 'baz'];
console.log(arr); // output: [ 'foo', 'bar', 'baz' ]


const [a, b, c] = arr;
console.log(a, b, c); // output: foo bar baz

const [,, d] = arr;
console.log(d); // output: baz

const e = arr[1];
console.log(e); // output: bar
