const pifagorTable = (rows = 9, columns = 9) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= columns; j++) {
      const value = i * j;
      if (value < 10) {
        line += " ";
      }
      line += value + " ";
    }
    console.log(line);
  }
}

pifagorTable();
