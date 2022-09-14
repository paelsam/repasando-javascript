

class Persona {

    // Metodo que actua como un constructor:
    static perObject( { nombre, apellido, pais} )  {
        // Creamos una nueva instancia de la persona con las 
        // Propieades del objeto destructurado
        return new Persona( nombre, apellido, pais );
    }

    constructor ( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`
            Info
            Nombre: ${ this.nombre }
            Apellido: ${ this.apellido }
            Pais: ${ this.pais }
        `)
    }
}


const nombre = 'Elkin',
      apellido = 'Angulo',
      pais = 'Colombia';

const elkin = {
    nombre: 'Elkin',
    apellido: 'Angulo',
    pais: 'Colombia'
}

const persona1 = new Persona(nombre, apellido, pais);
const persona2 = Persona.perObject( elkin );

persona1.getInfo();
persona2.getInfo();