import { getPeople, getPersonAwait, personAwait, personCicle } from "./js/await";


// console.time('await')
// getPeople()
//     .then( person => { 
//         console.table( person );
//         console.timeEnd('await');
//     });

// console.time('elkin')
// getPersonAwait(2)
//     .then(person => {
//         console.log(person);
//         console.timeEnd('await');
//     }).catch( console.error );

personCicle();
personAwait('elkin');
