import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const carService={
    getAllCars:()=>axiosService.get(urls.cars),
    getCarById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    createCar:(car)=>axiosService.post(urls.cars,car),
    deleteCar:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id,car)=>axiosService.put(`${urls.cars}/${id}`,car)

}

export {
    carService
}