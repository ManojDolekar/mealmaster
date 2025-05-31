


function MealCard({slide}:any) {
 const {title,content,meal}=slide;
  return (
    <div className="w-[900px] rounded-4xl ">
        <div className=' grid grid-cols-2 items-center rounded-4xl'>
            <div className=' flex justify-center flex-col ml-4 w-full h-full p-12 bg-amber-200'>
                <h1 className='  font-serif font-bold text-orange-800 text-2xl'>{title}</h1>
                <p className=' font-semibold text-black/80 text-xl '>{content}</p>
            </div>
            <div className='  overflow-hidden'>
                <img src={meal} alt="meal" className=' object-cover w-full '/>
            </div>
        </div>
   </div>
  )
}

export default MealCard