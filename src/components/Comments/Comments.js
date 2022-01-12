import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";
import './Comments.css'

const Comments = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(comments=>comments.json())
            .then(comments=> setComments(comments))
    },[])
    return (
        <div className='comments'>
            {console.log(comments)}
            {comments.map(value => <Comment key={value.id} id={value.id} postId={value.postId} email={value.email} name={value.name} body={value.body}/>)}
        </div>
    );
};

export default Comments;