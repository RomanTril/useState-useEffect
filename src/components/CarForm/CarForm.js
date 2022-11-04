import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator";
import {carService} from "../../service/car.service";

const CarForm = ({setCars,updateCar,setUpdateCar}) => {

const{register,reset,handleSubmit,setValue,formState:{errors,isValid} }=useForm({
    resolver:joiResolver(carValidator),
    mode:"all"})

    useEffect(()=>{
        if(updateCar){
            setValue("model",updateCar.model,{shouldValidate:true})
            setValue('price',updateCar.price,{shouldValidate:true})
            setValue('year',updateCar.year,{shouldValidate:true})
        }

    },[updateCar,setValue])

   const submit=async (car)=>{
    if(updateCar){
       const {data}= await carService.updateById(updateCar.id,car);
       setCars((cars)=>{
          const findCar=cars.find(value=>value.id===updateCar.id)
           Object.assign(findCar,data)
           setUpdateCar(null)
           return[...cars]
        })
    }else {
         const {data}= await carService.createCar(car);
         setCars(cars=>[...cars,data])

    }
       reset()
    }

    return (
        // <div>
        //     <form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
        //         <input type="text" placeholder={'model'} {...register('model',{required:true,minLength:{value:2, message:'minLength 2 ch'}})}/>
        //         {errors.model&&<span>{errors.model.message}</span>}
        //         <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
        //         {errors.model&&<span>{errors.model.message}</span>}
        //         <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
        //         {errors.model&&<span>{errors.model.message}</span>}
        //         <button disabled={!isValid}>Save</button>
        //     </form>
        // </div>


        // joi///////////////////////////////////////////

        <div>
            <form onSubmit={handleSubmit(submit)} >
                <input type="text" placeholder={'model'} {...register('model')}/>
                {errors.model&&<span>{errors.model.message}</span>}
                <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
                {errors.price&&<span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
                {errors.year&&<span>{errors.year.message}</span>}
                <button disabled={!isValid}>{updateCar?'Update': 'Save'}</button>
            </form>
        </div>
    );
};

export  {CarForm};