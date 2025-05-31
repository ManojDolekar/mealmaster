import  { useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import ImageCard from './Cards/ImageCard';
import { animate, number } from 'motion';

 export type Meal ={
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


function Meals() {
    // const navigate=useNavigate();
    const [meals,setMeals]=useState<Meal[]>([]);
    const [page,setPage]=useState<number>(1)
    const [totalPages,setTotalPages]=useState<number>(1);
    const limit:number = 30
    const [query,setQuery]=useState('');
    const [typingTimeout,setTypingTimeout]=useState(0);
    const [error,setError]=useState<string>('')
    const mealsRef = useRef(null)


    const fetchMeals= async()=>{
        try {
            const url=new URL('https://api.freeapi.app/api/v1/public/meals')
            url.searchParams.append('page',page.toString());
            url.searchParams.append('limit',limit.toString())
            if(query.trim()){
                url.searchParams.append("filter","strInstructions");
                url.searchParams.append('query',query.trim())
            }
            const response= await axios.get(url.toString())
            if(response.status===200 || response.status===201){
                console.log(response.data.data.data);
                
                setMeals(response?.data?.data?.data)
                setTotalPages(response.data?.data?.totalPages)
                console.log( 'meals fetched successfully');
            }
            
        } catch (error:unknown) {
            let errorMsg='an unknown error occured'
            if(axios.isAxiosError(error) && error.response){
                errorMsg=error.response.data.message || 'error  fetching meals'
            }else if(error instanceof Error){
                errorMsg=error.message
            }
            setError(errorMsg)
            console.error('meals fetching error :',error)
        }
    }

    const handleQuery=(e:any)=>{
        const value:string=e.currentTarget.value;
        setPage(1)

        if(typingTimeout) clearTimeout(typingTimeout);

        setTypingTimeout(
            setTimeout(() => {
                setQuery(value);
            }, 500)
        )
    }

    const handleNext=()=>{
        if(page<totalPages) setPage(page + 1)
    }

    const handlePrev=()=>{
        if(page>1) setPage(page-1)
    }
    
    const animations=()=>{
        if(mealsRef.current){
            animate(mealsRef.current,
                {opacity:[0,1],},
                {
                    duration:1.2,
                    delay:0.8,
                    easing:'ease-out'
                }
            )
        }
    }

    useEffect(()=>{
        fetchMeals();
        animations();
    },[query,page])

  return (
    !error?
    <div className=' '> 
        <div className=' flex items-center  '>
            <input className=' w-4xl mx-auto my-4 ring-2 ring-black/20 py-4 px-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-amber-400 bg-white/50 ' placeholder='Search for delicious meals' onChange={handleQuery}/>
        </div>
        <div ref={mealsRef} className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 '>
        {
            meals && (
                meals.map(meal =>(
                    <ImageCard key={meal.id} meal={meal} />
                ))
            )
        }
        </div>
        <div className=' flex flex-row items-center justify-center gap-4 my-6'>
            <button type='button' onClick={handlePrev} className=' py-2 px-4 bg-indigo-400/80 rounded-4xl text-white'>{"< prev"}</button>
            <span>page {page}</span>
            <button type='button' onClick={handleNext} className=' py-2 px-4 bg-indigo-400/80 rounded-4xl text-white'>{" next >"}</button>
        </div>
    </div>
    :
    <div className='flex items-center justify-center h-screen text-red-500 font-sans text-4xl'>
        {error}
    </div>
  )
}

export default Meals