

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

