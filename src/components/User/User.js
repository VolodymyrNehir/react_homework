import React from 'react';

import './user.css';

const User = ({user, userDetails}) => {
    const {name, id} = user
    console.log(userDetails)
    return (
        <div className='user'>
            {id} {name}
            <button onClick={() => userDetails(user)}>UserDetails</button>
        </div>
    );
};

export default User;