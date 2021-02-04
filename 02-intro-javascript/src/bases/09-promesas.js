//console.log( '???' );
import {getHeroeById} from './bases/08-imp-ext'
//las promesas son asincronas, primero js ejecuta todo lo sincrono y luego las promesas
//resolve se ejecuta cuando todo es correcto, reject cuando falla
/*const promesa = new Promise( ( resolve, reject) => {
    setTimeout( () => {
        console.log('2 segundotes later')
    }, 2000 )
} );*/
/*const promesa = new Promise( ( resolve, reject) => {
    setTimeout( () => {
        resolve();
    }, 2000 )
} );*/
/*    const promesa = new Promise( ( resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(2);
            //console.log(heroe);
            //cualquier cosa que mandemos en resolve se ira a then
            resolve(heroe);
            //reject('No hay jerou D:');
        }, 2000 )
    } );

    promesa.then( ( heroe ) => {console.log(heroe);
    } )
    .catch( err => console.warn( err ));*/

const getHeroeByIdAsync = (id) => {
    return new Promise( ( resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            //console.log(heroe);
            //cualquier cosa que mandemos en resolve se ira a then
            if( heroe ){ resolve(heroe); }
            else{ reject('No hay jerou D:'); }
        }, 2000 )
    } );

    //return promesa;
}

/*getHeroeByIdAsync(3)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err));*/

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn ); //agarra lo primero que recibe

