import React, {useEffect, useState} from 'react';

import {albumsServices} from "../../Services/albums.services";
import {Outlet, useParams} from "react-router-dom";
import Album from "../../components/Album/Album";

const Albums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsServices.allAlbums(id).then(value => setAlbums(value))
    }, [id])
    return (
        <div>
            <div>{
                albums.map(value => <Album key={value.id} albums={value}/>)
            }</div>
            <div><Outlet/></div>
        </div>
    );
};

export default Albums;