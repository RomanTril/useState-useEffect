import React, {useEffect, useState} from 'react';
import {carService} from "../../service/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const[cars, setCars]=useState([]);

    const [updateCar,setUpdateCar]=useState(null);

    useEffect(()=>{

        carService.getAllCars().then(({data})=>setCars(data))

    },[])


    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>

            <hr/>

            {cars.map((car=><Car key={car.id}car={car} setCars={setCars} setUpdateCar={setUpdateCar}/>))}
        </div>
    );
};

export  {Cars};