// import React from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
// import Image from "./Cards/Image";
import IngredientsCard from "./Cards/IngredientsCard";
import youtube from '../Icons/youtube-svgrepo-com.svg'
import kitchen from '../Images/6194.jpg'
import '../CSS/MealDetails.css'


type Meal={
    strMeal:string;
    strInstructions:string;
    strMealThumb:string;
    strYoutube:string
}

function MealDetails() {

    const {id}=useParams();
    const [meal,setMeal]=useState<Meal>()
    const nonVeg=['chicken','pork','egg','mutton','fish','fronse','crab','meat','beaf'];
    const regex = RegExp(nonVeg.join('|'),"gi")
    const matches=meal?.strInstructions.match(regex)

    const fetchMeal= async()=>{
        try {
            const response = await axios.get(`https://api.freeapi.app/api/v1/public/meals/${id}`)
            if(response.status===200 || response.status===201){
                setMeal(response.data.data)
                console.log('Meal fetched successfully');
            }
        } catch (error) {
            console.error('meal fetching error : ',error)
        }
    }

    useEffect(()=>{
        fetchMeal();
    },[])

  return (
    meal &&
    <div className=" bg-[#f0f2f5] items-center">
        <div style={{background:`url(${kitchen})`,backgroundRepeat:'repeat',backgroundSize:'cover'}} className=" sm:w-full md:w-[80%] mx-auto">
        <div className=" w-full bg-white/98  mx-auto border-black/10  shadow-2xl   ">
            <div className="flex items-center w-full">
                <div className=" relative w-sm mx-auto">
                <img src={meal?.strMealThumb} alt="meal" className=" object-cover mx-auto w-sm rounded-b-4xl " />
                {
                    matches ? (<div className=" absolute inline-block top-2 left-2"> <b className="absolute top-2 left-2  rounded-full  size-2 bg-white"></b> <span className="  font-bold text-white px-6 rounded-2xl py-1 bg-red-500"> Non Veg </span></div>) : (<div className=" absolute inline-block top-2 left-2"> <b className="absolute top-2 left-2  rounded-full  size-2 bg-white"></b> <span className="  font-bold  text-white px-6 rounded-2xl py-1 bg-green-500"> Veg </span></div>)
                }
                </div>
            </div>
            <h1 className="bg-[ #222222] md:mx-38 sm:mx-auto mx-10 font-bold  md:font-extrabold sm:text-2xl sm:font-bold  md:text-4xl text-2xl mt-6 mb-4 ">{meal.strMeal}</h1>
            <div className=" grid   sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 items-center pb-4 ">
                <div className=" mx-auto">
                    <IngredientsCard ingredientsInfo={meal}/>
                </div>
                <div className=" mx-auto rounded-l-2xl h-110 overflow-y-scroll scroll- p-6 bg-[#fff8e1] text-[#5d4037] scrollbar " >
                    <h1 className=" text-[#ef6c00] text-2xl font-bold mb-6"> Instructions </h1>
                    {meal.strInstructions}
                </div>
            </div>
            <span className="flex w-50 md:mx-46 sm:mx-auto  flex-col-reverse items-center " >
                Watch the Recipie video 
                <Link to={meal.strYoutube} title="meal preperation youtube video link"> <img src={youtube} alt="video" width="50px" /></Link>
            </span>
        </div>
        </div>
    </div>
  )
}

export default MealDetails