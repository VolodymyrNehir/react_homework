import axios from "axios";
import baseUrl from "../configs/urls";


const axsiosServices = axios.create({
  baseURL:baseUrl
})
export default axsiosServices
