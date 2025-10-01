import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import IngredientsCard from './Cards/IngredientsCard';
import { Link } from 'react-router-dom';
import youtube from '../Icons/youtube-svgrepo-com.svg';
import kitchen from '../Images/6194.jpg';
import '../CSS/MealDetails.css';

type Meal = {
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
  id: number;
};

type ApiResponse = {
  data: Meal;
};

function RandomMeal() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [error, setError] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  const nonVeg = ['chicken', 'pork', 'egg', 'mutton', 'fish', 'fronse', 'crab', 'meat', 'beef'];
  const regex = new RegExp(nonVeg.join('|'), 'gi');
  const matches = meal?.strInstructions.match(regex);

  useEffect(() => {
    if (containerRef.current && !hasAnimated.current && meal) {
      hasAnimated.current = true;
      containerRef.current.style.opacity = '0';
      containerRef.current.style.transform = 'scale(0.8) translateY(40px)';
      
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
          containerRef.current.style.opacity = '1';
          containerRef.current.style.transform = 'scale(1) translateY(0)';
        }
      }, 10);
    }
  }, [meal]);

  const randomMeal = async (): Promise<void> => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://api.freeapi.app/api/v1/public/meals/meal/random'
      );
      if (response.status === 200 || response.status === 201) {
        setMeal(response.data?.data || null);
        console.log('random meal fetched');
      }
    } catch (error: unknown) {
      let errorMsg = 'random meal error';
      if (axios.isAxiosError(error) && error.response) {
        errorMsg = error.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      setError(errorMsg);
      console.log(errorMsg);
    }
  };

  useEffect(() => {
    randomMeal();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-4xl font-bold">
        {error}
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="flex items-center justify-center h-screen text-indigo-500 text-2xl font-semibold">
        Loading meal...
      </div>
    );
  }

  return (
    <div className="bg-[#f0f2f5] min-h-screen flex items-center py-8">
      <div
        ref={containerRef}
        style={{
          background: `url(${kitchen})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
        className="sm:w-full md:w-[80%] mx-auto"
      >
        <div className="w-full bg-white/98 mx-auto border-black/10 shadow-2xl">
          <div className="flex items-center w-full">
            <div className="relative group w-full max-w-2xl mx-auto">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="object-cover mx-auto w-full rounded-b-4xl"
              />
              {matches ? (
                <div className="absolute group-hover:rotate-90 group-hover:top-12 group-hover:-left-9 transition-all duration-400 inline-block top-2 left-2">
                  <span className="relative flex items-center font-bold text-white px-6 rounded-2xl py-1 bg-red-500">
                    <b className="absolute -left-1 top-1/2 -translate-y-1/2 rounded-full size-2 bg-white"></b>
                    <span className="ml-2">Non Veg</span>
                  </span>
                </div>
              ) : (
                <div className="absolute inline-block top-2 left-2">
                  <span className="relative flex items-center font-bold text-white px-6 rounded-2xl py-1 bg-green-500">
                    <b className="absolute -left-1 top-1/2 -translate-y-1/2 rounded-full size-2 bg-white"></b>
                    <span className="ml-2">Veg</span>
                  </span>
                </div>
              )}
            </div>
          </div>

          <h1 className="bg-[#222222] md:mx-38 sm:mx-auto mx-10 font-bold md:font-extrabold sm:text-2xl md:text-4xl text-2xl mt-6 mb-4 text-white px-4 py-2 rounded">
            {meal.strMeal}
          </h1>

          <div className="grid sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 items-start pb-4 gap-4">
            <div className="mx-auto w-full px-4">
              <IngredientsCard ingredientsInfo={meal} />
            </div>
            <div className="mx-auto rounded-l-2xl h-[440px] overflow-y-scroll p-6 bg-[#fff8e1] text-[#5d4037] scrollbar w-full">
              <h1 className="text-[#ef6c00] text-2xl font-bold mb-6">Instructions</h1>
              <p className="whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
            </div>
          </div>

          <div className="flex w-full justify-center items-center flex-col pb-6 gap-2">
            <span className="text-gray-700 font-medium">Watch the Recipe video</span>
            <Link
              to={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              title="meal preparation youtube video link"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={youtube} alt="YouTube video" width="50px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomMeal;