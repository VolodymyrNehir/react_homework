import React from 'react';

import {Link} from "react-router-dom";

const Detailes = ({user}) => {
    return (

        <div className="User">
            <h3>{user.id} - {user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <Link to={`/users/` + `${user.id}` + `/post`} state={user}>
                <button>Posts</button>
            </Link>

        </div>

    );
};

export default Detailes;