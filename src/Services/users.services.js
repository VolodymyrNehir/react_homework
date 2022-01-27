import {urls} from "../Configs/urls";
import {axiosServices} from "./axiosServices";

export const usersServices = {
    getAllusers: () =>
        axiosServices.get(urls.users).then(value => value.data),
    getById: (id) =>
        axiosServices.get(urls.users + `/${id}`).then(value => value.data)


}
