// Какая-то там функция
const fn = function (name) {
  console.log(this.kind);
  console.log(name);
  console.log();
}

// Классика
fn.call({ kind: "hero" }, "Spiderman");
fn.apply({ kind: "villain" }, ["Joker"]);

// Ересь
({ kind: "animal", fn }).fn("Lion");
