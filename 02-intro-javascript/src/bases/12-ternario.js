//console.log( '???' );

const activo = true;

/*let mensaje = '';

if( !activo ){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}*/

const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

//si lo primero es V entonces lo segundo Primero && Segundo
//const mensaje = activo && 'Activo';
//si el primero es falso ya no evaluea el segundo
//const mensaje = !activo && 'Activo';

console.log(mensaje);