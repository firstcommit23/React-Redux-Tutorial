import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import RenderPropsSample from './components/RenderPropsSample';

function App() {
    return (
        <>
            <CounterContainer />
            <hr />
            <TodosContainer />

            <hr />
            <RenderPropsSample>{(value) => 2 * value}</RenderPropsSample>
            <RenderPropsSample>{(value) => 5 * value}</RenderPropsSample>
        </>
    );
}

export default App;
