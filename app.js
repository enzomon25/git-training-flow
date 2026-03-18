const applyOperation = (operation) => (a,b) => operation(a,b);

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarDosNumeros = applyOperation(sumar);
const multiplicarDosNumeros = applyOperation(multiplicar);

console.log(sumarDosNumeros(3, 3));
console.log(multiplicarDosNumeros(4, 2));
