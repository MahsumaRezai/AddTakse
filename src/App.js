import React from 'react';
import { Fragment, useState } from 'react';
import Home from './Component/Home';
import Module from './Component/Module';

const App = (props) => {
    const [cilck, setClick] = useState(false);
    const clickHandler = () => {
        setClick(true)
    }
    const hideHan = (props) => {
        setClick(false)
    }

    return (
        <Fragment>
            <Home text="Hello how are you" onClick={clickHandler} />
            <Home text="What do you do ?" onClick={clickHandler} />
            <Home text=" Do you like coding ?" onClick={clickHandler} />
            {cilck && <Module onClose={hideHan} />}

        </Fragment>
    );
};

export default App;
