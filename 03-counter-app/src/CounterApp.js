import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const CounterApp = ( {value = 10} ) => {

    //regresa un arreglo
    //const state = useState('Hiro');
    const [ counter, setCounter ] = useState( value );

    //handleAdd
    const handleAdd = () => {
        setCounter( counter + 1);
        //setCounter( ( c ) => c+1 );
    }
    const handleSubtract = () => {
        setCounter( counter - 1);
    }
    const handleReset = () => {
        setCounter( value );
    }
    /*const handleReset = () => {
        setCounter( ( c ) => c = value );
    }*/

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>            
            <button onClick={ handleSubtract }>-1</button>
        </>
        /*<>
            <h1>B I EN V E N I D O</h1>  
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <button onClick={   function() {console.log('CLICK!')}  }>Login</button>
        </>*/
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;