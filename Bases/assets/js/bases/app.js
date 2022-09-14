
// Poner colores en la consola
console.log("%c Esto es un Asalto!", "color: red; font-weight: bold; font-size: 30px;");



const getRandomNumber = () => Math.floor(Math.random() * 10);
console.log({ randomNumber: getRandomNumber() });

// Con parentesis si queremos retornar un objeto.
const createUser = (name, lastName) => ({ name, lastName });

const person1 = createUser("Elkin", "Panameño");
console.log( person1 );


// La palabra reservada "arguments" solo funciona en funciones tradicionales
function printArguments() {
    return arguments;
}
console.log(printArguments(1,2,3,["Hola", "Mundo"], false, "Elkin"));


// En las arrow functions usamos el spread operator
const printArgumentsTwo = ( number, ...args ) => ({ number, args });
console.log(printArgumentsTwo(1,2,3,true,false,"Elkin", "Marjorie"));

// Destructuración de Arreglos

const [nombre, apellido, age, single] = printArguments("Elkin", "Angulo", 17, false);
console.log({ nombre, apellido, age, single} );

// Destructuración de Objetos

const { lastName: apellidoRobado }  = person1;
console.log(apellidoRobado);

// Destructuración de Argumentos

const elkin = {
    nombreUser: "Elkin Samir",
    apellidoUser: "Angulo Panameño",
    edadUser: 17
}

const user = ({nombreUser, apellidoUser, edadUser, single = false}) => ({
    nombreUser,
    apellidoUser,
    edadUser,
    single
});

console.log(user(elkin));