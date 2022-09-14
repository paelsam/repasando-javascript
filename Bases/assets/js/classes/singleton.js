

class Singleton {

    static #instancia;
    nombre = '';

    constructor ( nombre = '' ) { 

        
        /** 
         * Es mejor trabajar con un valor booleano que con null y undefined
         * console.log( Singleton.#instancia );
         * console.log( !Singleton.#instancia );
         * console.log( !!Singleton.#instancia ); 
        */
        if ( !!Singleton.#instancia ) { // undefined, true, false
            return Singleton.#instancia;
        }

        
        Singleton.#instancia = this;
        this.nombre = nombre;
        
    }

}


const elkin = new Singleton('Elkin'); 
const hulk  = new Singleton('Bruce Banner');


console.log(`El nombre de la instancia es: ${ elkin.nombre }`);
console.log(`El nombre de la instancia es: ${ hulk.nombre }`);
