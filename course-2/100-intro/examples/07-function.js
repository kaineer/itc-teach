//
const lt = function(v, message = ">") {
  console.log(message, typeof v);
}

// 1 -- просто функция
lt(function() {});
// 2 -- с именем
lt(function named() {});
// 3 -- сокращенный вариант
lt(() => null);
// 4 -- функция, как часть объекта
lt({fn() {}}.fn);
