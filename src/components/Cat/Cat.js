import React from 'react';

const Cat = ({cat: {id, name}, setInc}) => {
    const deleteCat = (e) => {
        setInc({type: 'DeleteCat', payload: {catId: id}})

    }
    return (
        <div>
            {
                <div>
                    {name}
                    <button onClick={deleteCat}>Delete</button>
                </div>
            }
        </div>
    );
};

export {Cat};