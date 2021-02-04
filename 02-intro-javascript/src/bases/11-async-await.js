//console.log( '???' );


//para usar await la funcion debe ser async
const getImagen = async() => {

   try{
    const apiKey = 'FK6EDIR12G2CFbpdhTo5UNkb2dBojNLv';
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();

    const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
   }catch(error){
       console.log(error);
   }
}

getImagen();


/*
const apiKey = 'FK6EDIR12G2CFbpdhTo5UNkb2dBojNLv';

 const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

 peticion
    .then( resp => resp.json() ) //json retorna una promesa
    .then( ({ data }) => { 
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    }) //encadenamos la promesa, el resultado de la promesa anterior pasa a esta
    .catch( console.warn);*/