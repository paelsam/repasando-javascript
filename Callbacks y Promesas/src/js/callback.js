import '../css/componets.css';
import { people } from './database';


// Callback: Función llamada como parámetro
// En esta función el callback retorna una persona de la base de datos
export const searchPerson = (personID, callback) => {

    // Variable que busca la persona por medio del ID
    const person = people[personID];

    if (person) {
        callback(null, person);
    } else {
        // Error:
        // El primer parámetro de un callback es un parametro para manejar
        // Los errores.
        callback(`No exite una persona con el id ${personID}`);
    }

}