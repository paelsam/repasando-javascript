import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";


// Promise.race: retorna una promesa que se cumplirá o no tan pronto 
// como una de las promesas del argumento iterable se cumpla o se 
// rechace, con el valor o razón de rechazo de ésta.

/**
    // Anteriormente ya habia dicho, esta funcion es lo mismo que...
    promesaLenta.then( message => console.log( message ) );
    
    // Esto:
    promesaMedia.then( console.log );
    promesaRapida.then( console.log );
*/

Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( console.log )
    .catch( console.warn );