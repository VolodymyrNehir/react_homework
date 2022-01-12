import React from 'react';

import './Comment.css'
const Comment = (props) => {
    const {id,postId,email,name,body}=props

    return (
        <div>
            <div className='commentDiv'>
                <p>id:{id}</p>
                <p>PostId:{postId}</p>
                <p>Email:{email}</p>
                <p>Name:{name}</p>
                <p>Body:{body}</p>
            </div>
        </div>
    );
};

export default Comment;