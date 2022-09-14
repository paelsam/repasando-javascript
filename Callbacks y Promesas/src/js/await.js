import { searchPerson, searchPersonAsync } from "./promesas";


const peopleID = ['elkin', 'james', 'nando', 'felisa'];
const peoplePromise = peopleID.map( searchPerson );




export const getPeople = async () => {

    //! Esto es mejor que:
    return Promise.all( peopleID.map( searchPersonAsync ) );


    //! Esto:
    // const peopleArr = [];

    // for (const personID of peopleID) {
    //     // Mejor forma de manejar una cantidad grande de datos
    //     peopleArr.push( searchPersonAsync( personID ) );
        
    // }
    // return await Promise.all(peopleArr);

};


export const getPersonAwait = async ( id ) => {
    try {
        const person = searchPersonAsync( id );
        return person;
    } catch { error => {
        console.log("Catch");
        console.log( error );
    } };

}


export const personCicle = async () => {

    console.time("promise");

    //! For await: Espera a que las promesas se resuelvan para seguir el ciclo.
    for await ( const person of peoplePromise ) {
        console.log( person );
    }

    console.timeEnd("promise");
    
    // const people = await Promise.all( peoplePromise );
    // people.forEach( person => console.log( person ) );
}

export const personAwait = async ( personID ) => {

    //! If await: Espera a que la promesa se resuelva para seguir con la condicion.
    if ( (await searchPerson( personID )).name === "Elkin" ) {
        console.log("Soy el PEOR")
    } else {
        console.log("No lo eres");
    }

}