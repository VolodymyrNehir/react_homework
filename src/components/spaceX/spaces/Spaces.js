import React, {useEffect, useState} from 'react';

import Space from "../space/Space";

const Spaces = () => {
    const [launches, setLaunches] = useState([])
    useEffect(()=>{
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(launches=>launches.json())
            .then(launches=> setLaunches(launches.filter(item=>item.launch_year != 2020)))

    },[]);
    return (
        <div>
            {launches.map(value => <Space key={value.mission_name} mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Spaces;