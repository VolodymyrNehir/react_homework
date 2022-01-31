import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsServices} from "../../Services/comments.services";

const Comments = () => {
    const [comment, setComment] = useState([])
    const {postid} = useParams()
    useEffect(() => {
        commentsServices.getComment(postid).then(value => setComment(value))
    }, [])
    return (
        <div>
            {
                comment.map(commet => <Comment key={commet.id} comment={commet}/>)
            }
        </div>
    );
};

export {Comments};