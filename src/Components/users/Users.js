import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services/users.services";
import {User} from "../user/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersServices.allUsers().then(value => setUsers(value))
    }, []);
    return (

        <div>
            {
                users.map(value => <User key={value.id} users={value}/>)
            }

        </div>
    );
};

export {Users};