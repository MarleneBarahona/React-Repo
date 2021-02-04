//console.log( '???' );

//Arreglos en JS
const arreglo = [1,2,3,4];

let arreglo2 = [ ...arreglo, 5 ];

//al poner asi la funcoin, se ejecutara por cada elemento del arreglo
const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
});

const arreglo4 = [...arreglo2, ...arreglo3];

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );

/*Creando un arreglo de 100 posiciones
const arreglo = new Array( 100 ); 
//pero no significa que sea tama;o fijo, podemos a;adirle mas
arreglo.push(2);
*/

/*Si bien la manera de crear el objeto es la recomendada, usar el push afecta al objeto
const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
*/
