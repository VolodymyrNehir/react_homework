import {urls} from "../configs/urls";
import axios from "axios";
import axsiosServices from "./axios.services";

export const postsServices ={
    allPosts:(id)=>
        axsiosServices.get(`${urls.users}${id}/posts`).then(value => value.data)

}
