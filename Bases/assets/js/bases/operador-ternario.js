/* 
    Autor: Elkin Samir Angulo Panameño
    Inspired: Fernando Herrera 

    Tengo una tienda que tiene el siguiente horario: 
        - Los dias de semana abre a las 11
        - Los fines de semana abre a las 9
    
    En este ejercicio vamos a avisar al usuario si la tienda está abierta 
    o cerrada. SOLO CON VARIABLES Y OPERADORES TERNARIOS :u
*/

const dia = 2; 
const timeNow = 10; 

let timeOpen;
let message; 

timeOpen = ( [0, 6].includes( dia ) ) ? 
    { mensaje: "Fin de semana", horaApertura: 9 } : 
    { mensaje: "Dia de semana", horaApertura: 11 } ;

message  = ( timeNow >= timeOpen.horaApertura ) ? 
    "Está abierto" : 
    `Está cerrado, abrimos a las ${timeOpen.horaApertura}`

console.log( timeOpen.mensaje );
console.log({ timeOpen: timeOpen.horaApertura, message });