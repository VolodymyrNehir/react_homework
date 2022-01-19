import React, {useEffect, useState} from 'react';


import './post.css'

const Post = ({post}) => {

    return (
        <div className='post'>
            <h3>{post.id}:{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;