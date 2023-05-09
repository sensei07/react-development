import React from 'react';
import './App.css';
import {Tdd} from './components/TDD';
import {UseImperativeHandle} from './components/hooks/examples/UseImperativeHandle/UseImperativeHandle';
import {Typescript} from './components/typescript';

function App() {
    return (
        <>
            {/*<Tdd/>*/}
            <UseImperativeHandle/>
            <Typescript/>
        </>
    );
}

export default App;
