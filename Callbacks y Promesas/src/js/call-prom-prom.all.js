// Asignando un alias a una función
import { searchPerson as buscarPersona } from './js/callback'
import { searchPerson } from './js/promesas';
import './styles.css';

const personID = 'james';
const personID2 = 'elkin';
const personID3 = 'shary';

// El parámetro 'person' pasado en la funcion callback,
// lo pasamos a esta función. 

// buscarPersona(personID, (err, person) => {
//     if (err) { return console.error(err) }
//     searchPerson(personID2, (err, person2) => {
//         if (err) { return console.error(err) }
//         searchPerson(personID3, (err, person3) => {
//             if (err) { return console.error(err) }
//             console.log( person.name, person2.name, person3.name );
//         })
//     })
// })

// La función retorna una promesa

// searchPerson( personID )
//     // Decidimos que hacer con el valor enviado con then.
//     .then( person => {
//         // console.log(`Persona ${person.name} encontrad@`);
//         searchPerson( personID2)
//             .then( person2 => {
//                 console.log( person, person2);
//             })
//     })
//     .catch( console.error )


// Recibe un array de promesas y las ejecuta cuando todas esten resueltas.
Promise.all([ searchPerson( personID ), searchPerson( personID2 ), searchPerson( personID3 )])
    .then( ([person1, person2, person3]) => {
        console.log( person1.name, person2.name, person3.name );
    })
    .catch( err => { throw new Error(err) })
    .finally( () => {
        console.log( "Promise.all terminado" );
    })


console.log("Fin del programa");