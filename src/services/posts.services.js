import {axiosServicesJason} from "./axios.services";
import {urls} from "../constants/urls";

export const postsServices = {
    allPosts: () => axiosServicesJason.get(urls.posts).then(value => value.data)
};