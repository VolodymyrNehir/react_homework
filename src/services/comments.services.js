import {axiosServicesJason} from "./axios.services";
import {urls} from "../constants/urls";

export const commentsServices = {
    allComments: () => axiosServicesJason.get(urls.comments).then(value => value.data)
};