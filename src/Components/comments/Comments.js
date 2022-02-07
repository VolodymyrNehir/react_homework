import React, {useEffect, useState} from 'react';

import {commentsServices} from "../../services/comments.services";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComment] = useState([]);
    useEffect(() => {
        commentsServices.allComments().then(value => setComment(value))
    }, []);
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {Comments};