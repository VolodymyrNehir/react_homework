import React from 'react';

const User = ({users:{id,name}}) => {
    return (
        <div>
            <h4>id:{id} name:{name}</h4>
        </div>
    );
};

export {User};