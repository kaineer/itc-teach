//
console.log('Неинициализированная переменная:', typeof varName); // => undefined

(function(parameter) {
  console.log('Непереданный параметр:', typeof parameter); // => undefined
})();
