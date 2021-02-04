//console.log( '???' );

//Funciones en JS
const saludar = function ( nombre ) {
    return `Hola ${nombre}`;
}

//pasandola a funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

//si lo que hace es solamente retornar
const saludar3 = ( nombre ) => `Hola ${nombre}`;

//si no recibira nada
const saludar4 = ( ) => `Hola mundo`;


//console.log(saludar);
console.log(saludar('Juanito'));
//console.log(saludar2);
console.log(saludar2('Perejilo'));
//console.log(saludar3);
console.log(saludar3('Jotillo'));
console.log(saludar4());

const getUser = ( ) => {
    return {
        uid: 'ABC123',
        username: 'mebm',
    }
}
//acortandola
const getUser2 = ( ) => ({
    uid: 'ABC123',
    username: 'mebm'
});
console.log(getUser());
console.log(getUser2());

//Tarea
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC456',
        username: nombre
});
const usarioActivo = getUsuarioActivo('meco');
console.log( usarioActivo );

//***
//si la ponemos asi, nos tirara la def de function entera
//console.log(saludar);
//si la ponemos asi, nos hara lo que hace la funcion, dependera de cada una si recibe algo o no al llamarla
//console.log(saludar());

//No es una manera recomendada porque es facil de mofidicar:
/*function saludar( nombre ) {
    return `Hola ${nombre}`;
}*/