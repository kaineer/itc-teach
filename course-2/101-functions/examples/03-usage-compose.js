//
const compose = (f, g) => (arg) => g(f(arg));

const fn = compose((v) => v * 2, (v) => v + 10);

console.log(fn(4));

