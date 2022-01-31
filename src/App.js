import logo from './logo.svg';
import './App.css';
import {useReducer, useState} from "react";

import {Cets, Dogs, Forms} from "./components";



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CET':

    }

}

function App() {
    const [inc, setInc] = useReducer(reducer, null)
    const [infs, setinfa] = useState([])
    console.log(infs);

    return (
        <div className="App">
            <Cets/>
            <Dogs/>
            <Forms/>


            {/*<div className='hundredsDollars'>*/}
            {/*    hundreds of dollars*/}
            {/*    <div>{inc.hundredsDollars}00</div>*/}
            {/*    <form> <input onChange={value => setinfa(value)}/></form>*/}
            {/*    <button onClick={() => setInc({type: 'plushundredsDollars'})}>+</button>*/}
            {/*    <button onClick={() => setInc({type: 'minushundredsDollars'})}>-</button>*/}
            {/*    <button onClick={() => setInc({type: 'resethundredsDollars', payload: 0})}>reset</button>*/}

            {/*</div>*/}
            {/*<div className='dollar'> dollar*/}
            {/*    <div> {inc.dollar}</div>*/}
            {/*    <button onClick={() => setInc({type: 'plus'})}>+</button>*/}
            {/*    <button onClick={() => setInc({type: 'minus'})}>-</button>*/}
            {/*    <button onClick={() => setInc({type: 'reset', payload: 0})}>reset</button>*/}
            {/*</div>*/}
            {/*<div className='cent'>*/}
            {/*    cent*/}
            {/*    <div>{inc.cent}</div>*/}
            {/*    <button onClick={() => setInc({type: 'plusCent'})}>+</button>*/}
            {/*    <button onClick={() => setInc({type: 'minusCent'})}>-</button>*/}
            {/*    <button onClick={() => setInc({type: 'resetCent', payload: 0})}>reset</button>*/}
            {/*</div>*/}


        </div>
    );
}

export default App;
