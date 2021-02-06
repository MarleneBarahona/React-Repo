import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const CounterApp = ( {value} ) => {
    return (
        /*<>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={   function() {console.log('CLICK!')}  }>Login</button>
        </>*/
        <>
            <h1>B I EN V E N I D O</h1>  
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <button onClick={   function() {console.log('CLICK!')}  }>Login</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;