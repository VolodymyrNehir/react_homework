import React, {useEffect, useState} from 'react';


const UserDetails = ({userDetails,getPosts}) => {
    console.log(userDetails)
    return (
        <div>

                <h4>{userDetails.id}:{userDetails.name}</h4>
                <h4>{userDetails.username}</h4>
                <h4>{userDetails.email}</h4>
            <h4>{userDetails.phone}</h4>
            <h4>{userDetails.address.city}</h4>
            <h4>{userDetails.website}</h4>
            <button onClick={()=>
getPosts(userDetails.id)
            }>get posts</button>




        </div>
    );
};

export default UserDetails;