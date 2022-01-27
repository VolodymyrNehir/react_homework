import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photoService} from "../../Services/photo.service";
import Photo from "../../components/photo/Photo";

const Photos = () => {
    const {photoid} = useParams();
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        photoService.allPhoto(photoid).then(value => setPhoto(value))
    }, [photoid])
    return (
        <div>
            {photo && photo.map(value => <Photo key={value.id} photo={value}/>)}
        </div>
    );
};

export default Photos;