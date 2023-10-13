const obj1 = {
    first: 'a',
    second: 'b',
    third: 'c',
}
console.log(obj1); // { first: 'a', second: 'b', third: 'c' }

const obj2 = {
    third: 'd',
    fourth: 'e',
}
console.log(obj2); // { third: 'd', fourth: 'e' }

const combo1 = Object.assign({}, obj1, obj2);
console.log(combo1); // { first: 'a', second: 'b', third: 'd', fourth: 'e' }

const combo2 = {...obj1, ...obj2};
console.log(combo2); // { first: 'a', second: 'b', third: 'd', fourth: 'e' }

const obj3 = {
    ...obj1,
    third: 'f',
    fourth: 'g',
}
console.log(obj3); // { first: 'a', second: 'b', third: 'f', fourth: 'g' }
