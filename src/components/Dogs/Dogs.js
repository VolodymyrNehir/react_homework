import React from 'react';

import {Dog} from '../Dog/Dog';

const Dogs = ({dog, setInc}) => {
    const dogs = dog.dogs;
    return (
        <div>
            {
                dogs.map(value => <Dog key={value.id} dog={value} setInc={setInc}/>)
            }
        </div>
    );
};

export {Dogs};