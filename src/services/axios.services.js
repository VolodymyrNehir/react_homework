import axios from 'axios';
import {baseURL, baseURLjason} from "../constants/urls";

export const axiosServices =axios.create({baseURL});
export const axiosServicesJason =axios.create({baseURL:baseURLjason});

