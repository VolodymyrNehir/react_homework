import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services/users.services";
import User from "../User/User";
import './users.css'

const Users = ({userDetails}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersServices.getAllusers().then(value => setUsers(value));
    }, [])
    console.log(users)
    return (
        <div className='users'>
            {
                users.map(value => <User key={value.id} user={value} userDetails={userDetails}/>)
            }

        </div>
    );
};

export default Users;