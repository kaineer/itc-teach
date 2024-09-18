## Типы данных

### Все типы данных в javascript

 * undefined
 * boolean
 * number
 * string
 * object
 * symbol
 * function

### undefined

 * Значение переменной, которой не присвоили значение
 * Значение параметра функции, который не передали

./examples/01-undefined.js

### boolean

 * Часто является результатом выражения и не объявлен явно
 * Тип данных в котором меньше всего элементов

./examples/02-boolean.js

### number

 * Тип данных, на котором построена вся арифметика
 * 0.2 + 0.1 !== 0.3 (но это не глюк javascript)
 * В javascript можно делить на ноль (Infinity)
 * Если помножить Infinity на ноль, получим еще одно интересное "число" (NaN)

./examples/03-number.js

### string

 * Самый часто используемый тип
 * Приведение типов, сложение со строкой
 * typeof(typeof anything) === 'string'
 * str.length !== byteSize(str)

./examples/04-string.js

### object

 * Обычный объект - object
 * Массив - object
 * Любой объект из объектной модели браузера - object
 * null - тоже, внезапно, object

./examples/05-object.js

 * У объекта есть свойства, каждое из них мб любого типа
 * Способы задания свойств

./examples/05-object-props.js

### symbol

 * Используется ради уникальности
 * Может быть создан только один раз и не равен ничему кроме себя

./examples/06-symbol.js

### function

 * любая функция

./examples/07-function.js
