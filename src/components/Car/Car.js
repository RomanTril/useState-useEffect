import React from 'react';
import './Car.css';
import {carService} from "../../service/car.service";

const Car = ({car,setCars,setUpdateCar}) => {
    const {id,model,price,year}=car;

    const deleteCar=async ()=>{
        await carService.deleteCar(id)

        setCars(cars=> {
            const index = cars.findIndex(value =>  value.id === id)
            cars.splice(index, 1)
            return[...cars]
        })}

    return (

        <div className={'Car'}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div className={'button-wrap'}>
            <button onClick={()=>setUpdateCar(car)}>update</button>
            <button onClick={()=>deleteCar()}>delete</button>
            </div>
        </div>
    );
};

export  {Car};