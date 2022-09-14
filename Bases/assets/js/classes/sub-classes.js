

class Persona {

    // Las propiedades estáticas y metodos estáticos son solo de la clase,
    // No de las instancias
    static _conteo = 0;
    static get conteo() {
        return `${Persona._conteo} instancias`
    }

    static staticMethod() {
        console.log('Este un metodo estático');
    }

    nombre = '';
    codigo = ''; 
    frase = '';
    comida = '';

    constructor( nombre, codigo, frase ) {
    
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    
    }

    quienSoy() {
        return `Soy ${this.nombre}`;
    }

    /**
     * @param {string} comida
     */
    set setComidaFavorita( comida ) {
        this.comida = comida;
    }
    get getComidaFavorita( ) {
        return `${ this.nombre }: Mi comida favorita ${ (this.comida[this.comida.length - 1] === 's') ? 'son' : 'es' }: ${ this.comida }`
    }
}





class Heroe extends Persona {
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase ) {
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quienSoy( ) {
        console.log(`${super.quienSoy()} de ${this.clan}`)
    }
}


const hulk = new Heroe( 'Bruce Banner', 'Hulk', 'Hulk Aplasta!' );
console.log( hulk );
console.log( hulk.frase );
hulk.quienSoy();