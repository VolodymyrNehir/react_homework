import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPosts from "./components/UsersPosts/UsersPosts";
import {Albums, Comments, Photos, PostDetailes, Posts, Users} from "./pages";
import UserDetailes from "./components/UserDetailes/userDetailes";


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
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={'/posts/:postid'} element={<PostDetailes/>}>
                            <Route path={'/posts/:postid/comments'} element={<Comments/>}/>
                        </Route>
                    </Route>


                </Route>
            </Routes>

        </div>


    );
}

export default App;
