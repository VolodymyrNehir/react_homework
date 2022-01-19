import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postsServices} from "../../services/posts.services";

const Posts = ({getPosts}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            postsServices.allPosts(getPosts).then(value => setPosts(value))
        }, []
    );
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;