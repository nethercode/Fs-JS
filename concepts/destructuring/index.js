const dog = {
    name: 'fido',
    age: '3',
    bark() {
        console.log('woof');
    }
}

const name = dog.name;
console.log(name); // fido

const age = dog.age;
console.log(age); // 3

const { name: dogName, age: dogAge } = dog;
console.log(dogName); // fido
console.log(dogAge); // 3


const arr = ['foo', 'bar', 'baz'];
console.log(arr); // [ 'foo', 'bar', 'baz' ]

const [a, b, c] = arr;
console.log(a, b, c); // foo bar baz

const [,, d] = arr;
console.log(d); // baz

const e = arr[1];
console.log(e); // bar
