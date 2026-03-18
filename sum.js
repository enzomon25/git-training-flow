const fnSum = (a, b) => a + b;

const applyOperation = (operation) => (a,b) => operation(a,b);

const sumarDosNumeros = applyOperation(fnSum);

console.log(sumarDosNumeros(3, 3));

const fnMultiply = (a, b) => a * b;

const multiplicarDosNumeros = applyOperation(fnMultiply);

console.log(multiplicarDosNumeros(4, 2));

console.log('Fin del programa');