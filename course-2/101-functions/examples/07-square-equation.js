//
const discriminant = (a, b, c) => {
  return b*b - 4 * a * c;
}

const solveEquation = (a, b, c) => {
  const d = discriminant(a, b, c);

  if (d < 0) {
    return { msg: "Решения нет" }; // В вещественных числах
  } else if (d === 0) { // Такая себе натяжка
    return { msg: "Один корень", x: (-b / 2 * a) };
  }

  return {
    msg: "Два корня",
    x1: (-b - Math.sqrt(d)) / (2*a),
    x2: (-b + Math.sqrt(d)) / (2*a),
  };
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, -3));
