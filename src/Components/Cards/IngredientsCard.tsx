// import React from 'react'

function IngredientsCard({ingredientsInfo}:any) {
    // passing the ingredient name and there measurements in arrays 
    const ingredientName:string[]=[]
    const ingredientMeasure:string[]=[]
    if(ingredientName){
        console.log(ingredientName,ingredientMeasure);
        
    }
            for (let i = 1; i <= 20; i++) {
                const ingredient = ingredientsInfo[`strIngredient${i}`];
                const measure=ingredientsInfo[`strMeasure${i}`]
                if (ingredient && ingredient.trim()) {
                    ingredientName.push(ingredient.trim());
                    ingredientMeasure.push(measure.trim());
                }
                }
            
  return (
    
        <div className=' w-[98%] flex items-start flex-col rounded-2xl px-6  shadow-2xl duration-200 transition-all bg-green-50'>
            <h1 className='text-2xl  font-bold ml-4 text-green-700 flex'>Ingredients</h1>
            <div className='  text-sm my-2  '>
                
                {
                    ingredientName.map((item,index)=>( 
                            // todo :
                            ingredientMeasure[index].length>0 ?
                        <div key={index} className='  w-full flex flex-row items-center mb-0.5 '>
                          <b className="size-2 bg-green-900 rounded-full mx-2"></b>  <h2 className='flex items-center text-green-900 justify-center'> {ingredientMeasure[index]} {item} </h2>
                        </div>:null)
                    )
                }
            </div>
        </div>
  )
}

export default IngredientsCard