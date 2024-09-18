//
const lt = function(v, message = ">") {
  console.log(message, typeof v);
}

lt(true, '> Просто true:');
lt(false, '> Просто false:');

lt(0.1 + 0.2 === 0.3, '> Результат сравнения:');
lt(0.1 + 0.2 > 0.3, '> Результат сравнения:');
