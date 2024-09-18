//
const lt = function(v, message = ">") {
  console.log(message, typeof v);
}

// Обычные числа
lt(1);
lt(1e6);
lt(1e20);
lt(3.1415926)

console.log('Ни разу не 0.3:', 0.1 + 0.2);

// Всякое интересное
// ** Бесконечность
const infinity = 1 / 0;
// ** Не число
const nan = infinity * 0;

lt(infinity, '> Бесконечность тоже число:');
lt(nan, '> Не число тоже число:');

// Интересные свойства NaN
console.log(nan === nan); // => false

console.log(nan > 0); // => false
console.log(nan < 0); // => false
console.log(nan === 0); // => false
