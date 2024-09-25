// name
const variableName = () => null;
console.log(variableName.name);

const anotherVar = variableName;
console.log(anotherVar.name);

const f = function functionName() {
}

console.log(f.name);

console.log('anonymousFunctionName: ' + (() => 0).name); // => ''
