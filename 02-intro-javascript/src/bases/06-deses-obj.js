//console.log( '???' );
//Dato intrigante, si en el console.log primero mando un numero me muestra los strings entre " xd "
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const { nombre, edad, clave } = persona;
//si existe la propiedad en el objeto, pone el que trae, si no pone por defecto Capi
const usecontext = ( { clave, nombre, edad, rango='Capi' } ) => {
    //console.log(edad, clave, edad, rango )
    return {
        nomClave: clave,
        anios: edad,
        latlng: {
            lat: 45689,
            lng: 74684
        }
    }
}

//para desestructurar un objeto que viene dentro del objeto Obj:{obj1,obj2} se llama desestructuracion anidada
const {nomClave,anios, latlng:{lat,lng}} = usecontext(persona);
//const {nomClave,anios, latlng} = usecontext(persona);

console.log(nomClave,anios);
console.log(lat,lng);

//console.log(latlng);
/*const retornaPersona = ( usuario ) => {
    const { nombre, edad, clave } = persona;

    console.log(nombre, edad,clave)
}*/

   /* console.log( nombre, edad, clave );
    console.table(persona);
    console.log(nombre);
    console.log(edad);
    console.log(clave);*/