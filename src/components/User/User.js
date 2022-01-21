import React from 'react';

import './user.css';

const User = ({user}) => {
    const {name, id, email, username} = user
    return (
        <div className='user'>
            {id} - {name} - {username}- {email}
        </div>
    );
};

export default User;