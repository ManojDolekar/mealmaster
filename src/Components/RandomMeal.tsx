import axios from 'axios';
import  { useEffect, useRef, useState } from 'react'
import IngredientsCard from './Cards/IngredientsCard';
import { Link } from 'react-router-dom';
import youtube from '../Icons/youtube-svgrepo-com.svg'
import kitchen from '../Images/6194.jpg'
import '../CSS/MealDetails.css'
import { animate } from 'motion';


type Meal ={
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;

  /** Custom property not in API */
  id: number; // Looks like an additional field you added yourself
}

function RandomMeal() {

    const [meal,setMeal]=useState<Meal>();
    const [error,setError]=useState<string>();
    const nonVeg=['chicken','pork','egg','mutton','fish','fronse','crab','meat','beaf'];
    const regex = RegExp(nonVeg.join('|'),"gi")
    const matches=meal?.strInstructions.match(regex)
    const container=useRef<HTMLDivElement>(null)
    
    if(container.current){
        animate(container.current,
            {
                opacity:[0,1],scale:[0.80,1],y:[40,0]
            },
            {
                duration:1.5,
                delay:0,
                easing:'ease-out'
            }
        )
    }

    const randomMeal=async()=>{
        try {
            const response=await axios.get(`https://api.freeapi.app/api/v1/public/meals/meal/random`)
            if(response.status===200|| response.status===201){
                setMeal(response.data?.data)
                console.log("random meal fetched");
            }
        } catch (error:unknown) {
            let erroMsg="random meal error";
            if(axios.isAxiosError(error) && error.response ){
                erroMsg=error.message;
            }else if(error instanceof Error){
                erroMsg=error.message
            }
            setError(erroMsg)
            console.log(erroMsg);
        }
    }
    useEffect(()=>{
        randomMeal()
    },[])

  return (
     meal ?
     <div  className=" bg-[#f0f2f5] items-center">
        <div ref={container} style={{background:`url(${kitchen})`,backgroundRepeat:'repeat',backgroundSize:'cover'}} className=" sm:w-full md:w-[80%] mx-auto">
        <div  className=" w-full bg-white/98  mx-auto border-black/10  shadow-2xl   ">
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
    :
    <div className=' flex items-center justify-center text-red-500 text-4xl font-bold'>
    {error}</div>
  )
}

export default RandomMeal