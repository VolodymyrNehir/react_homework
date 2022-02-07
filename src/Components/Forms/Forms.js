import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import './forms.css'
import carReducer, {creatCars, updateCars} from "../../store/cars.slice";
import {Cars} from "../Cars/Cars";

const Forms = () => {
    const {upCar} = useSelector(state => state['carReducer']);

    useEffect(() => {
        setValue("model", upCar.model);
        setValue("price", upCar.price);
        setValue("year", upCar.year);
    }, [upCar]);

    const {register, reset, handleSubmit, setValue} = useForm();

    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(creatCars({data}));
        reset();
    }
    const upadate = (data) => {
        dispatch(updateCars({id: upCar.id, newCar: data}));

    };
    return (
        <div>
            <div className='forms'>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder='model' {...register('model')}/>
                    <input type="text" placeholder='price' {...register('price')}/>
                    <input type="text" placeholder='year' {...register('year')}/>
                    <button>save</button>
                    {upCar.id && <button onClick={handleSubmit(upadate)}>update</button>}
                </form>
            </div>
            <div><Cars/></div>
        </div>
    );
};

export {Forms};