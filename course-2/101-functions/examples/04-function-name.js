// name
const variableName = () => null;
console.log(variableName.name);

const anotherVar = variableName;
console.log(anotherVar.name);

const f = function functionName() {
}

console.log(f.name);

// length
const f0 = () => null;
const f2 = (a, b) => null;
const fv = (...arg) => null;

console.log(f0.length);
console.log(f2.length);
console.log(fv.length);

