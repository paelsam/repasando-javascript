import { people } from "./database";



export const searchPerson = ( personID ) => {

    const person = people[ personID ];

    // Las promesas reciven dos argumentos:
    /**
     * Resolve: Resuelto
     * Reject: Rechazado 
     */
    return new Promise(( resolve, reject ) => {
        if ( person ) {
            resolve( person );
        } else {
            reject( `No exite una persona con el id ${ personID }` )
        }
    });
}



// searchPerson con Forma con Async 
export const searchPersonAsync = async ( personID ) => {

    const person = people[ personID ];

    if ( person ) {
        return person ;
    } else {
        throw `No exite una persona con el id ${ personID }`;
    }
}


const promesaLenta = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve("Slowly Promise"), 2000)
}); 

const promesaMedia = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve("Middle Promise"), 1500)
}); 

const promesaRapida = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve("Fastly Promise"), 1000)
}); 


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}