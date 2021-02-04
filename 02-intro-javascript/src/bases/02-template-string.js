const nombre = 'Marlene';
const apellido = 'Barahona';

//const nombreCompleto = nombre + ' ' + apellido + 1+1;
//const nombreCompleto = `Hola mundo`;
//const nombreCompleto = `${nombre} ${apellido}`;

const nombreCompleto = `${nombre}
${apellido}
${1+1}
`;


console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo(nombre) }`);
console.log( `Este es un texto: ${ getSaludo(nombre + ' ' + apellido) }`);
//console.log( `Este es un texto: ${ getSaludo(`${nombre}`) }`);
console.log( `Este es un texto: ${ getSaludo(`${nombre} ${apellido}`) }`);
//console.log( `Este es un texto: ${ getSaludo(`${nombreCompleto}`) }`);