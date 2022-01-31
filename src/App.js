import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPosts from "./components/UsersPosts/UsersPosts";
import UserDetailes from "./components/UserDetailes/userDetailes";
import {Albums, Comments, Photos, PostDetailes, Posts, Users} from "./pages";


function App() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetailes/>}>
                            <Route path={'/users/:id/post'} element={<UsersPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':photoid'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':postid'} element={<PostDetailes/>}>
                            <Route path={'/posts/:postid/comments'} element={<Comments/>}/>
                        </Route>
                    </Route>


                </Route>
            </Routes>

        </div>


    );
}

export default App;
