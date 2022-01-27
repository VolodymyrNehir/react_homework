import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Users from "./pages/Users/Users";
import UserDetailes from "./components/UserDetailes/userDetailes";
// import Post from "./components/Post/post";
import UsersPosts from "./components/UsersPosts/UsersPosts";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import Posts from "./pages/Posts/Posts";


function App() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={'/users/:id'} element={<UserDetailes/>}>
                            <Route path={'/users/:id/post'} element={<UsersPosts/>}/>
                        </Route>
                        <Route path={'/users/:id/albums'} element={<Albums/>}>
                            <Route path={':photoid'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}/>


                </Route>
            </Routes>

        </div>


    );
}

export default App;
