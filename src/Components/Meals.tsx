// import  { useEffect, useRef, useState } from 'react'
// import axios from 'axios'
// // import { useNavigate } from 'react-router-dom'
// import ImageCard from './Cards/ImageCard';
// import { animate } from 'motion';
// import {QueryClient,QueryClientProvider,useMutation,useQuery} from '@tanstack/react-query'

//  export type Meal ={
//   idMeal: string;
//   strMeal: string;
//   strDrinkAlternate: string | null;
//   strCategory: string;
//   strArea: string;
//   strInstructions: string;
//   strMealThumb: string;
//   strTags: string | null;
//   strYoutube: string;
//   strIngredient1: string;
//   strIngredient2: string;
//   strIngredient3: string;
//   strIngredient4: string;
//   strIngredient5: string;
//   strIngredient6: string;
//   strIngredient7: string;
//   strIngredient8: string;
//   strIngredient9: string;
//   strIngredient10: string;
//   strIngredient11: string;
//   strIngredient12: string;
//   strIngredient13: string;
//   strIngredient14: string;
//   strIngredient15: string;
//   strIngredient16: string;
//   strIngredient17: string;
//   strIngredient18: string;
//   strIngredient19: string;
//   strIngredient20: string;
//   strMeasure1: string;
//   strMeasure2: string;
//   strMeasure3: string;
//   strMeasure4: string;
//   strMeasure5: string;
//   strMeasure6: string;
//   strMeasure7: string;
//   strMeasure8: string;
//   strMeasure9: string;
//   strMeasure10: string;
//   strMeasure11: string;
//   strMeasure12: string;
//   strMeasure13: string;
//   strMeasure14: string;
//   strMeasure15: string;
//   strMeasure16: string;
//   strMeasure17: string;
//   strMeasure18: string;
//   strMeasure19: string;
//   strMeasure20: string;
//   strSource: string;
//   strImageSource: string | null;
//   strCreativeCommonsConfirmed: string | null;
//   dateModified: string | null;

//   /** Custom property not in API */
//   id: number; // Looks like an additional field you added yourself
// }


// function Meals() {
//     // const navigate=useNavigate();
//     const [meals,setMeals]=useState<Meal[]>([]);
//     const [page,setPage]=useState<number>(1)
//     const [totalPages,setTotalPages]=useState<number>(1);
//     const limit:number = 30
//     const [query,setQuery]=useState('');
//     const [typingTimeout,setTypingTimeout]=useState(0);
//     const [error,setError]=useState<string>('')
//     const mealsRef = useRef(null)

//             const url=new URL('https://api.freeapi.app/api/v1/public/meals');
//             url.searchParams.append('page',page.toString());
//             url.searchParams.append('limit',limit.toString());
//             if(query.trim()){
//                 url.searchParams.append('filter','strInstructions');
//                 url.searchParams.append('query',query.trim())
//             }
            
//             const {isLoading,isSuccess,isError,data,error: queryError }=useQuery({
//                 queryKey:['allMeals',page,query],
//                 queryFn:async()=>{ 
//                     const response= await axios.get(url.toString())
//                     return response.data?.data
//                 }
//             })

//             if(isError && queryError instanceof Error){
//                 setError(queryError.message ||'Failed to fetch meals')
//             }
            

//     useEffect(()=>{
//         if(isSuccess && data){
//             setMeals(data?.data)
//             setTotalPages(data?.totalPages)
//         }
//     },[isSuccess,data])
//     // const fetchMeals= async()=>{
//     //     try {
//     //         const url=new URL('https://api.freeapi.app/api/v1/public/meals')
//     //         url.searchParams.append('page',page.toString());
//     //         url.searchParams.append('limit',limit.toString())
//     //         if(query.trim()){
//     //             url.searchParams.append("filter","strInstructions");
//     //             url.searchParams.append('query',query.trim())
//     //         }
//     //         const response= await axios.get(url.toString())
//     //         if(response.status===200 || response.status===201){
//     //             console.log(response.data.data.data);
                
//     //             setMeals(response?.data?.data?.data)
//     //             setTotalPages(response.data?.data?.totalPages)
//     //             console.log( 'meals fetched successfully');
//     //         }
            
//     //     } catch (error:unknown) {
//     //         let errorMsg='an unknown error occured'
//     //         if(axios.isAxiosError(error) && error.response){
//     //             errorMsg=error.response.data.message || 'error  fetching meals'
//     //         }else if(error instanceof Error){
//     //             errorMsg=error.message
//     //         }
//     //         setError(errorMsg)
//     //         console.error('meals fetching error :',error)
//     //     }
//     // }

//     const handleQuery=(e:any)=>{
//         const value:string=e.currentTarget.value;
//         setPage(1)

//         if(typingTimeout) clearTimeout(typingTimeout);

//         setTypingTimeout(
//             setTimeout(() => {
//                 setQuery(value);
//             }, 500)
//         )
//     }

//     const handleNext=()=>{
//         if(page<totalPages) setPage(page + 1)
//     }

//     const handlePrev=()=>{
//         if(page>1) setPage(page-1)
//     }
    
//     const animations=()=>{
//         if(mealsRef.current){
//             animate(mealsRef.current,
//                 {opacity:[0,1],},
//                 {
//                     duration:1.2,
//                     delay:0.8,
//                     easing:'ease-out'
//                 }
//             )
//         }
//     }

//     useEffect(()=>{
//         // fetchMeals();
//         animations();
//     },[query,page])

//   return (
    
//     !isError?
//     <div className=' '> 
//         <div className=' flex items-center  '>
//             <input className=' w-4xl mx-auto my-4 ring-2 ring-black/20 py-4 px-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-amber-400 bg-white/50 ' placeholder='Search for delicious meals' onChange={handleQuery}/>
//         </div>
//         <div ref={mealsRef} className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 '>
//         {
//             meals && (
//                 meals.map(meal =>(
//                     <ImageCard key={meal.id} meal={meal} />
//                 ))
//             )
//         }
//         </div>
//         <div className=' flex flex-row items-center justify-center gap-4 my-6'>
//             <button type='button' onClick={handlePrev} className=' py-2 px-4 bg-indigo-400/80 rounded-4xl text-white'>{"< prev"}</button>
//             <span>page {page}</span>
//             <button type='button' onClick={handleNext} className=' py-2 px-4 bg-indigo-400/80 rounded-4xl text-white'>{" next >"}</button>
//         </div>
//     </div>
//     :
//     <div className='flex items-center justify-center h-screen text-red-500 font-sans text-4xl'>
//         {error}
//     </div>
//     )
// }

// export default Meals



import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ImageCard from './Cards/ImageCard';
import { animate } from 'motion';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// If Meal type is not exported from types file, you can define it inline here
export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strInstructions: string;
  // Add other fields if needed
};

function Meals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<any>(0);
  const mealsRef = useRef<HTMLDivElement>(null);
  const limit = 30;

  const buildURL = () => {
    const url = new URL('https://api.freeapi.app/api/v1/public/meals');
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    if (query.trim()) {
      url.searchParams.append('filter', 'strInstructions');
      url.searchParams.append('query', query.trim());
    }
    console.log(url.toString());
    
    return url.toString();
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['allMeals', page, query],
    queryFn: async () => {
      const response = await axios.get(buildURL());
      return response.data?.data;
    },
    keepPreviousData: true,
    staleTime: 5000,
  });
  console.log(data);
  

  useEffect(() => {
    if (data) {
      setMeals(data?.data);
      setTotalPages(data?.totalPages);
      animate(mealsRef.current, { opacity: [0, 1] }, { duration: 0.8, easing: 'ease-out' });
    }
  }, [data]);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setPage(1);
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(setTimeout(() => setQuery(value), 500));
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  if (isError && error instanceof Error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-semibold text-xl">
        {error.message || 'Failed to fetch meals'}
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="w-full max-w-2xl px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white placeholder:text-gray-400"
          placeholder="Search for delicious meals..."
          onChange={handleQuery}
        />
      </div>

      {/* Meals Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-60 text-indigo-500 font-semibold text-xl">
          Loading meals...
        </div>
      ) : (
        <>
          <div
            ref={mealsRef}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-500"
          >
            {meals.map((meal) => (
              <ImageCard key={meal.idMeal} meal={meal} />
            ))}
          </div>

          {/* Pagination with Heroicons */}
          <div className="flex items-center justify-center mt-10 space-x-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Previous</span>
            </button>

            {/* Page Indicator */}
            <div className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow-sm">
              Page {page} <span className="text-white/70">of {totalPages}</span>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium">Next</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Meals;

