import React, {useRef} from 'react';
import {type} from "@testing-library/user-event/dist/type";

const Forms = () => {
    const addCet = useRef([])
    console.log(addCet)
    const send = (e) => {
        e.preventDefault()
        console.log(addCet.current.value)
    }
    return (
        <div>
            <form>
                <input type="tex"  ref={addCet} />
                <button onClick={send}>addCet</button>

            </form>
        </div>
    );
};

export {Forms};