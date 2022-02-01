import React from 'react';

import {Cat} from "../Cat/Cat";

const Cats = ({cat, setInc}) => {
    const cats = cat.cats;
    return (
        <div>
            {
                cats.map(value => <Cat key={value.id} cat={value} setInc={setInc}/>)
            }
        </div>
    );
};

export {Cats};