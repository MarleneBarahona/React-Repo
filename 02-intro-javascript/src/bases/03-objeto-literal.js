const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        ciudad : 'Soyacity',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321, 
    },
};

const persona2 = {...persona};
persona2.nombre = 'Juanito';

console.table( persona );
console.table( persona2 );

//***Explicacion porque no hacer objeto2=objeto
//mostrando estado actual de los datos
    //console.table( persona );
//"copiamos" los datos de persona a persona2
    //const persona2 = persona;
//cambiamos los datos de persona2
    //persona2.nombre = 'Pedito';

/*mostramos datos de ambos y notamos que no cambiamos solo persona2, 
    cambiamos ambos porque al hacer persona2 = persona hacemos referencia 
    a la direccion de memoria, no a su contenido*/
    //console.table( persona );
    //console.table( persona2 );
//****

//***Maneras de mostrar un objeto en console
/*
console.log( persona );
console.log( {
    persona : persona
});
console.table( persona );
console.table( {
    persona : persona
});*/