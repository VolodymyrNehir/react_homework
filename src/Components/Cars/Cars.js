import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {getAllCars} from "../../store/cars.slice";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    console.log(cars)
    useEffect(() => {
        dispatch(getAllCars());
    }, [])
    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};
