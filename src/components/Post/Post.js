import React from 'react';

import './Post.css'

const Post = (props) => {
    const {id,userId,title,body}=props
    return (
        <div>
            <div className='postDiv'>
                <p>id:{id}</p>
                <p>UserId:{userId}</p>
                <p>Title:{title}</p>
                <p>Body:{body}</p>

            </div>
        </div>
    );
};

export default Post;