import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services/users.services";
import User from "../User/User";
import './users.css'

const Users = ({users}) => {
    console.log(users)

    return (
        <div className='users'>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

        </div>
    );
};

export default Users;