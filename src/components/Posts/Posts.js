import React, {useEffect, useState} from 'react';

import './Posts.css'
import Post from "../Post/Post";
const Posts = () => {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(posts=>posts.json())
            .then(posts=> setPosts(posts))

    },[])
    return (
        <div className='postsDiv'>
            {console.log(posts)}
            {posts.map(value => <Post key={value.id} id={value.id} userId={value.userId} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;