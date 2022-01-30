import React from 'react';
import {NavLink} from "react-router-dom";

import './post.css'

const Post = ({post}) => {
    return (
        <div className='post'>
            <div className='postInfa'><h3>userId:{post.userId}</h3>
                <h4>id:{post.id}</h4>
                <p>title:{post.title}</p></div>
            <div className='postButton'><NavLink to={`/posts/`+ post.id}><button>Post detailes</button></NavLink></div>


        </div>
    );
};

export default Post;