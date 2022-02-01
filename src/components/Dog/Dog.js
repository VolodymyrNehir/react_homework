import React from 'react';

const Dog = ({dog: {id, name}, setInc}) => {
    const daleteDog = (e) => {
        e.preventDefault();
        setInc({type: 'DaleteDog', payload: {dogId: id}})
    }
    return (
        <div>
            {
                <div>
                    {name}
                    <button onClick={daleteDog}>Delete</button>
                </div>

            }
        </div>
    );
};

export {Dog};