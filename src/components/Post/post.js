import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h3>userId:{post.userId}</h3>
            <h4>id:{post.id}</h4>
            <p>title:{post.title}</p>
        </div>
    );
};

export default Post;