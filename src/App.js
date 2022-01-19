import logo from './logo.svg';
import './App.css';

import Users from "./components/Users/users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {useState} from "react";

function App() {
    const [users, setUsers] = useState(null);
    const [usersId, setUsersID] = useState(null)
    const userDetails = (user) => {
        setUsers(user)
        setUsersID(null)
    }
    const getPosts = (usersID) => {
        setUsersID(usersID)
    }
    console.log(usersId)
    return (
        <div>
            <div className="App">
                <Users userDetails={userDetails}/>
                {users && <UserDetails userDetails={users} getPosts={getPosts}/>}
            </div>
            <div>
                {usersId && <Posts getPosts={usersId}/>}
            </div>
        </div>
    );
}

export default App;
