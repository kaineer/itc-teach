//
const fn = (obj) => {
  obj.key = 42;
}

// Передаем пустой объект в функцию
const obj = {};

fn(obj);

// Видим, что объект изменился
console.log(obj);
