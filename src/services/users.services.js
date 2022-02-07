import {axiosServicesJason} from "./axios.services";
import {urls} from "../constants/urls";


export const usersServices = {
    allUsers: () => axiosServicesJason.get(urls.users).then(value => value.data)

};