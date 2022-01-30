import React from 'react';
import {NavLink} from "react-router-dom";


const User = ({user}) => {

    return (

        <div>{user.id} {user.name} <NavLink to={'/users/' + user.id} state={user}>
            <button>userDetailes</button>
        </NavLink> <NavLink to={`/users/` + `${user.id}` + `/albums`} state={user}>
            <button>Albums</button>
        </NavLink></div>


    );
};

export default User;