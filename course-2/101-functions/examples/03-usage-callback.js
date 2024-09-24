//
const fn = () => 4;

const addTwo = (fn) => {
  return fn() + 2;
}

console.log(addTwo(fn));

