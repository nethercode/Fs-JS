function pureFn(a, b) {
    return a + b;
}
let c = pureFn(1, 2);
console.log(c); // 3

function impureFn(a) {
    return c + a;
}
let d = impureFn(1);
console.log(d); // 4

function outer() {
    let x = 10;
    function inner() {
        x = x + 1;
        console.log(x);
    }
    return inner;
}
const incrementX = outer();
incrementX(); // 11
incrementX(); // 12
