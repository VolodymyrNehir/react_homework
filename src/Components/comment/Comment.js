import React from 'react';

const Comment = ({comment: {id, name, body}}) => {
    return (
        <div>

            <h4>id: {id} name: {name}</h4>
            <p>{body}</p>

        </div>
    );
};

export {Comment};