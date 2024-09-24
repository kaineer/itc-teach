// 1.
const anonymousFunction = function () {
  console.log("Hello, function");
}

// 2.
function namedFunction() {
  console.log("Named function");
}

// 3.
const arrowFunction = () => "arrow function";

// 4.
const memberFunction = {
  memberFunction() {}
}.memberFunction;

[anonymousFunction, namedFunction, arrowFunction, memberFunction].forEach((f) => {
  console.log(typeof f);
});
