//console.log( '???' );

const personajes = ['Loki', 'Thor', 'Jenn'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

//Tarea
function usestate(valor){
    return [ valor, () => {console.log('Alo?')}];
}

const [nombre,setNombre] = usestate('Spidey');
//const arr = usestate('Spidey');
//console.log(arr);

//Tarea
console.log(nombre);
setNombre();