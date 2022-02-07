import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, LayoutPages, PostsPage, UsersPage} from "./Pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutPages/>}>
                    <Route path={"/cars"} element={<CarsPage/>}/>
                    <Route path={"/users"} element={<UsersPage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                    <Route path={"/comments"} element={<CommentsPage/>}/>


                </Route>


            </Routes>
        </div>
    );
}

export default App;
