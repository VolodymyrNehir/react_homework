import React from 'react';

import './userPost.css';

const UserPost = ({posts}) => {
    return (
        <div className='userPost'>
            <h3>id: {posts.id}</h3>
            <p>body: {posts.body}</p>
            <p>title:{posts.title}</p>
            <h3> userId: {posts.userId}</h3>

        </div>
    );
};

export default UserPost;