import React, {useEffect, useState} from 'react';

import { useParams} from "react-router-dom";
import {postsServices} from "../../Services/posts.services";
import UserPost from "../UserPost/UserPost";

const UsersPosts = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    useEffect(() => {

        postsServices.userPosts(id).then(value => setPost(value))
    }, [id])

    return (
        <div>
            {post && post.map(valua => <UserPost key={valua.id} posts={valua}/>)}
        </div>
    );
};

export default UsersPosts;