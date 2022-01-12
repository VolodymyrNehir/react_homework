import React from 'react';

import "./space.css";
const Space = (props) => {
    const {mission_name,launch_year,mission_patch_small} =props
    return (
        <div className="space">
            <div className='mission_name_year'>
                <h1>{mission_name} </h1>
                <p>{launch_year}</p>
            </div>

            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Space;