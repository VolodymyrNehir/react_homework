import React from 'react';

import {useDispatch} from "react-redux";
import {deletCar, deleteCaars, setUpdateCars} from "../../store/cars.slice";
import './car.css';

const Car = ({car}) => {
    const dispatch = useDispatch();
    return (
        <div className='car'>

            <div>ID: {car.id}</div>
            <div>Model: {car.model}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>

            <button onClick={() => dispatch(deleteCaars({id: car.id}))}>Delete</button>
            <button onClick={() => dispatch(setUpdateCars(car))}>update</button>


        </div>
    );
};

export {Car};