import logo from './logo.svg';
import './App.css';
//
// import Users from "./components/Users/users";
// import UserDetails from "./components/UserDetails/UserDetails";
// import Posts from "./components/Posts/Posts";
// import {useState} from "react";
import Form from "./components/Form/Form";
import Users from "./components/Users/users";
import {useEffect, useState} from "react";
import {usersServices} from "./services/users.services";

function App() {
    const [users, setUsers] = useState([]);
    const [filtersUsers, setFilterUser] = useState([]);
    useEffect(() => {
        usersServices.getAllusers().then(value => {
            setUsers([...value]);
            setFilterUser([...value]);
        });
    }, []);

    const filterUsers = (value) => {
        let filterArr = [...users]
        if (value.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(value.name.toLowerCase()));
        }
        if (value.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(value.username.toLowerCase()));
        }
        if (value.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(value.email.toLowerCase()));
        }
        setFilterUser(filterArr);
    }
    return (
        <div>
            <div className="form">
                <Form filter={filterUsers}/>
            </div>
            <div className="App">
                <Users users={filtersUsers}/>
            </div>

        </div>
    );
}

export default App;
