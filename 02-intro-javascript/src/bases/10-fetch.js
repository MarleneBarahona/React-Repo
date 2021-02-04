//console.log( '???' );

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
    .catch( console.warn);

/* peticion
    .then( resp => resp.json() ) //json retorna una promesa
    .then( ({ data }) => { console.log(data.images.original.url) }) //encadenamos la promesa, el resultado de la promesa anterior pasa a esta
    .catch( console.warn);*/

 /*peticion
    .then( resp => { resp.json().then( data => {console.log(data)}) } ) //json retorna una promesa
    .catch( console.warn);*/
