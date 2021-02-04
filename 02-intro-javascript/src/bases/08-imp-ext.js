//console.log( '???' );
//import heroes, { owners } from "./data/heroes"; si heroes esta por defecto y owners individual
//import { heroes, owners } from "../data/heroes";
//pa mientras solo queremos heroes
import { heroes } from "../data/heroes";
//tendriamos que cambiar la ruta para que en 08-imp-ext llegue al archivo heroes.js
//import { heroes, owners } from "../data/heroes";
/*const getHeroeById =  (id) => {
    return heroes.find( (heroe) => heroe.id===id);
}*/
/*const getHeroeById =  (id) => {
    return heroes.find( ( heroes ) => { return heroes.id===id});
}*/

export const getHeroeById =  (id) => heroes.find( (heroe) => heroe.id===id);

//console.log(getHeroeById(3));

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner===owner);

//console.log(getHeroeByOwner('Marvel'));

//console.log(owners);
//console.log(heroes);

//export default getHeroeById;