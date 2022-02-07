import React, {useEffect, useState} from 'react';

import {Post} from "../post/Post";
import {postsServices} from "../../services/posts.services";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsServices.allPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} posts={value}/>)
            }
        </div>
    );
};

export {Posts};