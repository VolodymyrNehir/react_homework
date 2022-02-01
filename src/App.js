import logo from './logo.svg';
import './App.css';
import {useReducer, useState} from "react";

import {Cats, Dogs, Forms} from "./components";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: Date.now(), name: action.payload.cat}]}
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: Date.now(), name: action.payload.dog}]}
        case 'DeleteCat':
            return {...state, cats: [...state.cats.filter(value => value.id !== action.payload.catId)]}
        case 'DaleteDog':
            return {...state, dogs: [...state.dogs.filter(value => value.id !== action.payload.dogId)]}
    }

}

function App() {
    const [inc, setInc] = useReducer(reducer, {cats: [], dogs: []})

    return (
        <div className="App">
            <div>
                <Forms setInc={setInc}/>
            </div>
            <div className="catsAndDogs">
                <div>
                    <Cats cat={inc} setInc={setInc}/>
                </div>
                <div>
                    <Dogs dog={inc} setInc={setInc}/>
                </div>
            </div>


        </div>
    );
}

export default App;
