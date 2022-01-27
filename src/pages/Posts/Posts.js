import React, {useEffect, useState} from 'react';

import {postsServices} from "../../Services/posts.services";
import Post from "../../components/Post/post";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postsServices.allPosts().then(value => setPosts([...value]))
    },[])
    return (

        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;