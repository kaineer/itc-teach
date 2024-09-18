//
const lt = function(v, message = ">") {
  console.log(message, typeof v);
}

const sym = Symbol("white");
const sym2 = Symbol("white");

// => symbol
lt(sym);

// Идентичный параметр не приводит к идентичности символа
console.log(sym === sym2);
console.log(sym === sym);
