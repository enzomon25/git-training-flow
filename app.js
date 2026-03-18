const applyOperation = (operation) => (a,b) => operation(a,b);

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const restar = (a, b) => a - b;
const division = (a, b) => a / b;

const sumarDosNumeros = applyOperation(sumar);
const multiplicarDosNumeros = applyOperation(multiplicar);
const restarDosNumeros = applyOperation(restar);
const divisionDosNumeros = applyOperation(division);

console.log(sumarDosNumeros(3, 3));
console.log(multiplicarDosNumeros(4, 2));
console.log(restarDosNumeros(10, 5));
console.log(divisionDosNumeros(10, 5));
