import React from 'react';

import './User.css'

const User = (props) => {
    const {id,name,email,username}=props
    return (
        <div>
<div className='userDiv'>
    <p>id:{id}</p>
    <p>Name:{name}</p>
    <p>Username:{username}</p>
    <p>Email:{email}</p>
</div>

        </div>
    );
};

export default User;