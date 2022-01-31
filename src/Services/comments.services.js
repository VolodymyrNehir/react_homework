import {urls} from "../Configs/urls";
import {axiosServices} from "./axiosServices";

export const commentsServices = {
    getComment: (id) => axiosServices.get(urls.posts + `/` + id + urls.comments).then(value => value.data)
}
