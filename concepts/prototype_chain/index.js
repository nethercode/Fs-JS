const animal = {
    dna: 123,
    };

const dog = {
    bark() {
        console.log('woof');
    }
}

Object.setPrototypeOf(dog, animal) // dog inherits properties from animal object

const p1 = Object.getPrototypeOf(animal)
console.log(p1)

const p2 = Object.getPrototypeOf(p1)
console.log(p2)

dog.bark()
