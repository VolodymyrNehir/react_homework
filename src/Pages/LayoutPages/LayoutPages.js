import React from 'react';

import {NavLink, Outlet} from "react-router-dom";
import "./Layout.css";

const LayoutPages = () => {
    return (
        <div>
            <div className={'menu'}>
                <NavLink to={"/cars"}>Cars</NavLink>
                <NavLink to={"/users"}>users</NavLink>
                <NavLink to={"/posts"}>posts</NavLink>
                <NavLink to={"/comments"}>comments</NavLink>
            </div>

            <Outlet/>

        </div>
    );
};

export {LayoutPages};