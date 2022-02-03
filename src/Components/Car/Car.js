import React from 'react';
import {useDispatch} from "react-redux";
import {deletCar} from "../../store/cars.slice";

const Car = ({car:{model,price,year,id}}) => {
  const dispatch = useDispatch()
    return (
        <div>
            {model}-{price}-{year}
            <button onClick={()=>dispatch(deletCar({id}))}>Delete</button>

        </div>
    );
};

export {Car};