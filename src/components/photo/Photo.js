import React from 'react';

import './photo.css';

const Photo = ({photo}) => {
    return (
        <div className='photo'>
            <div><h3>ID:{photo.id}  </h3>
                <p>TITLE:{photo.title}</p>
            </div>

            <img src={`${photo.thumbnailUrl}`} alt="img"/>
        </div>
    );
};

export default Photo;