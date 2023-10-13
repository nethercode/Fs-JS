const x = '';
console.log(x); // {empty_string}

const a = x || 'default';
console.log(a); // default

const b = x ?? 'default';
console.log(b); // {empty_string}
