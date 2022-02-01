import React, {useRef} from 'react';

const Forms = ({setInc}) => {
    const addCat = useRef([]);
    const addDog = useRef([]);
    const sendCat = (e) => {
        e.preventDefault();
        setInc({type: 'ADD_CAT', payload: {cat: addCat.current.value}});
        addCat.current.value = '';
    }

    const sendDog = (e) => {
        e.preventDefault();
        setInc({type: 'ADD_DOG', payload: {dog: addDog.current.value}});
        addDog.current.value = '';
    }


    return (
        <div>
            <form>
                <input type="tex" name={'cat'} ref={addCat}/>
                <button onClick={sendCat}>add cat</button>

                <input type="text" name={'dog'} ref={addDog}/>
                <button onClick={sendDog}>add dog</button>
            </form>
        </div>
    );
};

export {Forms};