import axios from "axios";
import {urls} from "../configs/urls";
import axsiosServices from "./axios.services";
export const usersServices={
    getAllusers:()=>
        axsiosServices.get(urls.users).then(value=> value.data)

}
console.log(usersServices.getAllusers())