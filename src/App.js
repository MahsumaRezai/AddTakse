import React from 'react';
import { Fragment } from 'react';
import Home from './Component/Home';



const App = (props) => {
    return (
        <Fragment>
            <Home text="Hello" />
            <Home text="How are you" />
            <Home  text=" What do yo do ?"/>



        </Fragment>
    );
};

export default App;
