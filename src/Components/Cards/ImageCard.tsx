// import React from 'react'
import { useNavigate } from 'react-router-dom';

// type Meal={
//     id:number;
//     strMeal:string;
//     strMealThumb:string;
//     strArea:string;
// }

function ImageCard({meal}:any) {
    const navigate=useNavigate();

    const {id,strMeal,strMealThumb,strArea} =meal;

  return (
    <div className=' flex justify-center flex-col  w-70 mx-auto p-4 hover:shadow-2xl duration-200 hover:scale-101 rounded-2xl bg-transparent'>
        <div className='  w-full rounded-2xl mx-auto hover:scale-102 duration-200 cursor-pointer  '
          onClick={()=>navigate(`/Meal-Details/${id}`)}
          >
            <img src={strMealThumb} alt={`${strArea} Dish`} width="100%" className=' object-cover   duration-200 transition-all ' />
        </div>
        <div className=' flex items-start my-2'> 

        <h2 className=' text-black font-bold "> '> {strMeal} </h2>
        </div>
    </div>
  )
}

export default ImageCard

// interface ImageCardProps {
//   meal: any;
//   size?: number;
// }
// const ImageCard: React.FC<ImageCardProps> = ({ meal, size = 100 }) => {
//   return (
//     <div>
//       <img src={meal.strMealThumb} alt={meal.strMeal} width={size} />
//       <h2>{meal.strMeal}</h2>
//     </div>
//   );
// };

// export default ImageCard;
