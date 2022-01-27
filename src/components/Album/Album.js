import React from 'react';

import {NavLink} from "react-router-dom";

const Album = ({albums}) => {
    return (
        <div>
            <h3>{albums.id}</h3>
            <p>{albums.title}</p>
            <NavLink to={`${albums.id}`}>
                <button> photos</button>
            </NavLink>


        </div>
    );
};

export default Album;