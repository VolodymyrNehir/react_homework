import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {usersServices} from "../../Services/users.services";
import Detailes from "../Detailes/Detailes";

const UserDetailes = () => {
    const {id} = useParams()
    const history = useLocation().state;
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (history) {
            setUser(history)
        }
        usersServices.getById(id).then(valua => setUser(valua))
    }, [id])

    return (
        <div>
            {user && <Detailes key={user.id} user={user}/>}
            <div><Outlet/></div>
        </div>
    );
};

export default UserDetailes;