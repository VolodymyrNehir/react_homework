import axios from 'axios';
import baseUrl from "../Configs/urls";

const axiosServices = axios.create({baseURL: baseUrl})
export {axiosServices}
