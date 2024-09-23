const defaultFormatter = (_i, _j, value) => {
  if (value < 10) {
    return " " + value + " ";
  }
  return value + " ";
}

const table = (
  formatter = defaultFormatter,
  action = (a, b) => a * b,
) => (rows = 9, columns = 9) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= columns; j++) {
      line += formatter(i, j, action(i, j));
    }

    console.log(line);
  }
}

const action = (i, j) => i + j;
const schoolFormatter = (sign) => (i, j, value) => {
  let line = "" + i + " " + sign + " " + j + " = ";
  if (value < 10) {
    line += " ";
  }
  return line + value + " | ";
}

table(schoolFormatter("+"), action)();
console.log("");
table(schoolFormatter("x"))();
