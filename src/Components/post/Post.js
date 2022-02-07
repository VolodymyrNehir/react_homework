import React from 'react';

const Post = ({posts: {id, title, body}}) => {
    return (
        <div>
            <h4>id:{id} title:{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export {Post};