import logo from './logo.svg';
import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'plus':
            return {...state, dollar: state.dollar + 1}
        case 'minus':
            return {...state, dollar: state.dollar - 1}
        case 'reset':
            return {...state, dollar: action.payload}
        case 'plusCent':
            return {...state, cent: state.cent + 1}
        case 'minusCent':
            return {...state, cent: state.cent - 1}
        case 'resetCent':
            return {...state, cent: action.payload}
        case 'plushundredsDollars':
            return {...state, hundredsDollars: state.hundredsDollars + 1}
        case 'minushundredsDollars':
            return {...state, hundredsDollars: state.hundredsDollars - 1}
        case 'resethundredsDollars':
            return {...state, hundredsDollars: action.payload}
    }

}

function App() {
    const [inc, setInc] = useReducer(reducer, {dollar: 0, cent: 0, hundredsDollars: 0})
    return (
        <div className="App">
            <div className='hundredsDollars'>
                hundreds of dollars
                <div>{inc.hundredsDollars}00</div>
                <button onClick={() => setInc({type: 'plushundredsDollars'})}>+</button>
                <button onClick={() => setInc({type: 'minushundredsDollars'})}>-</button>
                <button onClick={() => setInc({type: 'resethundredsDollars', payload: 0})}>reset</button>

            </div>
            <div className='dollar'> dollar
                <div> {inc.dollar}</div>
                <button onClick={() => setInc({type: 'plus'})}>+</button>
                <button onClick={() => setInc({type: 'minus'})}>-</button>
                <button onClick={() => setInc({type: 'reset', payload: 0})}>reset</button>
            </div>
            <div className='cent'>
                cent
                <div>{inc.cent}</div>
                <button onClick={() => setInc({type: 'plusCent'})}>+</button>
                <button onClick={() => setInc({type: 'minusCent'})}>-</button>
                <button onClick={() => setInc({type: 'resetCent', payload: 0})}>reset</button>
            </div>


        </div>
    );
}

export default App;
