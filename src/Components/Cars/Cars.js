import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {getAllCars} from "../../store/cars.slice";

const Cars = () => {
   const {cars} = useSelector(state => state['carReducer'])
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getAllCars())
    },[])
    console.log(getAllCars())
    return (
        <div>
            {
cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};