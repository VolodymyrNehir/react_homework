import React, {useState} from 'react';

const Form = ({filter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const changeEvent = (event) => {
        const eventInput = {...form, [event.target.name]: event.target.value}
        setForm({...form, ...eventInput});


    }
    const Check = (c) => {
        c.preventDefault();
        filter(form);


    }
    return (
        <div>
            <form>
                <label>name<input type="text" name={'name'} value={form.name} onChange={changeEvent}/></label>

                <label>username<input type="text" name={'username'} value={form.username}
                                      onChange={changeEvent}/></label>

                <label>email<input type="text" name={'email'} value={form.email} onChange={changeEvent}/></label>
                <button onClick={Check}>Check</button>

            </form>
        </div>
    );
};

export default Form;