import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ImageCard from './Cards/ImageCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Type definitions
export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strInstructions: string;
};

type MealsResponse = {
  data: Meal[];
  totalPages: number;
};

type ApiResponse = {
  data: MealsResponse;
};

function Meals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);
  const mealsRef = useRef<HTMLDivElement>(null);
  const limit = 30;

  const buildURL = (): string => {
    const url = new URL('https://api.freeapi.app/api/v1/public/meals');
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    if (query.trim()) {
      url.searchParams.append('filter', 'strInstructions');
      url.searchParams.append('query', query.trim());
    }
    return url.toString();
  };

  const { isLoading, isError, data, error } = useQuery<MealsResponse, Error>({
    queryKey: ['allMeals', page, query],
    queryFn: async (): Promise<MealsResponse> => {
      const response = await axios.get<ApiResponse>(buildURL());
      return response.data?.data;
    },
    staleTime: 5000,
  });

  useEffect(() => {
    if (data) {
      setMeals(data.data || []);
      setTotalPages(data.totalPages || 1);

      if (mealsRef.current) {
        mealsRef.current.style.opacity = '0';
        setTimeout(() => {
          if (mealsRef.current) {
            mealsRef.current.style.transition = 'opacity 0.8s ease-out';
            mealsRef.current.style.opacity = '1';
          }
        }, 10);
      }
    }
  }, [data]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setSearchInput(value);
    setPage(1);
    
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    const timeout = setTimeout(() => {
      setQuery(value);
    }, 500);
    
    setTypingTimeout(timeout);
  };

  const handleNext = (): void => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = (): void => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-semibold text-xl">
        {error?.message || 'Failed to fetch meals'}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchInput}
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
        ) : meals.length === 0 ? (
          <div className="flex justify-center items-center h-60 text-gray-500 font-semibold text-xl">
            No meals found
          </div>
        ) : (
          <>
            <div
              ref={mealsRef}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {meals.map((meal) => (
                <ImageCard key={meal.idMeal} meal={meal} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-10 space-x-4">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-current"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Previous</span>
              </button>

              <div className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow-sm">
                Page {page} <span className="text-white/70">of {totalPages}</span>
              </div>

              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 disabled:hover:text-current"
              >
                <span className="text-sm font-medium">Next</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Meals;