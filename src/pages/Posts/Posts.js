import React, {useEffect, useState} from 'react';

import {postsServices} from "../../Services/posts.services";
import Post from "../../components/Post/post";
import {Outlet} from "react-router-dom";
import './posts.css'


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsServices.allPosts().then(value => setPosts([...value]))
    }, [])
    return (

        <div className='posts'>
            <div>{
                posts.map(value => <Post key={value.id} post={value}/>)
            }

            </div>
            <div className='one'><Outlet/></div>

        </div>
    );
};

export {Posts};