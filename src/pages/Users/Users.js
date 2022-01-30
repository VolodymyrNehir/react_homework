import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {usersServices} from "../../Services/users.services";
import User from "../../components/User/User";
import './Users.css'


const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        usersServices.getAllusers().then(value => setUser([...value]))
    }, [])
    return (

        <div className='users'>
            <div>{
                user.map(user => <User key={user.id} user={user}/>)

            }</div>

            <div><Outlet/></div>
        </div>

    );
};

export {Users};