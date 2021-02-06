import React from 'react';
import PropTypes from 'prop-types'
import logo from './logo.png';

//todos los componentes reciben PropTypes pero generalmente los reciben desestructurados, no como props en si
const PrimeraApp = ( {saludo, subtitulo} ) => {
    //const PrimeraApp = ( {saludo='Hola buenas'} ) => { valor por defecto
    //const PrimeraApp = ( props ) => {
    
   /*const arre = [1,2,3,4,5,6];
    const persona = {
        nombre: 'Marlene',
        edad: 22
    }*/

    return (
        <>  
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </>
       /* <>
            <h1>B I EN V E N I D O</h1>  
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <button type="button" class="btn">LOG IN</button>
            </div>
            <p>Estos son elementos de un arreglo: { arre } </p>
            <p>Esto es un objeto: { JSON.stringify(persona) }</p>
            <pre>Esto es un objeto con formato: { JSON.stringify( persona , null , 3) }</pre>
        </>*/
    ) 
    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un sub'
}
export default PrimeraApp;