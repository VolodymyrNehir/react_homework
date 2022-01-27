import {urls} from "../Configs/urls";
import {axiosServices} from "./axiosServices";

export const postsServices = {
    userPosts: (id) =>
        axiosServices.get(`/users/` + `${id}` + urls.posts).then(post => post.data),
    allPosts:()=> axiosServices.get(urls.posts).then(value => value.data),


}
console.log(postsServices.allPosts())