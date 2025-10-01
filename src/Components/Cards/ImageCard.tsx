
import { useNavigate } from 'react-router-dom';

function ImageCard({ meal }: any) {
  const navigate = useNavigate();
  const { id, strMeal, strMealThumb, strArea } = meal;

  return (
    <div
      className="group bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer max-w-sm mx-auto"
      onClick={() => navigate(`/Meal-Details/${id}`)}
    >
      <div className="overflow-hidden">
        <img
          src={strMealThumb}
          alt={`${strArea} Dish`}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
          {strMeal}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{strArea} Cuisine</p>
      </div>
    </div>
  );
}

export default ImageCard;
