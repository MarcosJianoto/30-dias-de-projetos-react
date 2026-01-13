const data = new Date(2026, 0, 15, 10, 30);
console.log(data);

const dateString = new Date("2026-01-15T13:30:00.000Z");
console.log(dateString);

const dateToLocal = data.toLocaleDateString("pt-BR");
const dateToLocal2 = data.toLocaleDateString("en-US");
const dateToLocal3 = data.toLocaleDateString("fr-FR");

console.log(dateToLocal, dateToLocal2, dateToLocal3);
