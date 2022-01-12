import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css'


const Users = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resole=>resole.json())
        .then(users=>setUsers(users))},[])

    return (

        <div className='usersDiv'>

            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email}/>)}

        </div>
    );
};

export default Users;