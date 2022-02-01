import React from 'react';
import {useForm} from "react-hook-form";

import './forms.css'

const Forms = () => {
  const {register,reset,handleSubmit} = useForm()
    const submit = (e) => {
      reset()
    }
    return (
        <div className='forms'>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='model' {...register('model')}/>
                <input type="text" placeholder='price' {...register('price')}/>
                <input type="text" placeholder='year' {...register('year')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {Forms};