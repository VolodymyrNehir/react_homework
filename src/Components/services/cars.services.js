import {urls} from "../../constants/urls";
import axios from "axios";
import {axiosServices} from "./axios.services";

export const CarsServices =  {
    getCars:()=> axiosServices.get(urls.cars).then(cars => cars.data),
    createCars:(car)=> axiosServices.post(urls.cars,car).then(cars => cars.data),
    deleteCrs:(id)=> axiosServices.delete(`${urls.cars}/${id}`).then(value => value.data),
    updateCar:(id,newCar)=>  axiosServices.patch(`${urls.cars}/${id}`,newCar)
}
