import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import PostDetaile from "../../components/PostDetaile/PostDetaile";
import {postsServices} from "../../Services/posts.services";

const PostDetailes = () => {
    const {postid} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        postsServices.getPost(postid).then(value => setPost(value));
    }, [postid]);
    return (
        <div>
            <PostDetaile key={post.id} post={post}/>
        </div>
    );
};

export {PostDetailes};