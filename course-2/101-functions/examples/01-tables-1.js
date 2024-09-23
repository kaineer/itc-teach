// Таблица пифагора
for (let i = 1; i < 10; i++) {
  let line = "";
  for (let j = 1; j < 10; j++) {
    const value = i * j;
    if (value < 10) {
      line += " ";
    }
    line += value + " ";
  }
  console.log(line);
}

console.log("");
console.log("");

// Школьная таблица умножения
for (let i = 1; i < 10; i++) {
  let line = "";
  for (let j = 1; j < 6; j++) {
    line += "" + j + " x " + i + " = ";
    const value = i * j;
    if (value < 10) {
      line += " ";
    }
    line += value + " | ";
  }
  console.log(line);
}
