import {urls} from "../Configs/urls";
import {axiosServices} from "./axiosServices";

export const photoService = {
    allPhoto:
        (id) => axiosServices.get(urls.albums + `/${id}` + urls.photo).then(value => value.data)
}