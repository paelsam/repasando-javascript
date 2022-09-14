const esMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? "Son 2 dólares" : "Son 10 dólares";


console.log(esMayor(10, 11));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'James',
    'Fernando',
    'Leidi',
    amigo ? "Daniel" : "Andres",
    (() => "As it was")(),
    esMayor(20, 19)
]

console.log(amigosArr);


const nota = 80;
const grado = 
    nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
    nota >= 85 ? 'B+' :
    nota >= 80 ? 'B' : 'F';

console.log({ grado });