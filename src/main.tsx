import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Layout from './Components/Layout/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealDetails from './Components/MealDetails.tsx'
import Meals from './Components/Meals.tsx'
import RandomMeal from './Components/RandomMeal.tsx'
import Home from './Components/Home.tsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"all-meals",
      element:<Meals/>
    },
      {
      path:"/",
      element:<Home/>
    }
    ,{
      path:'/Meal-Details/:id',
      element:(<MealDetails/>)
    },
  {
    path:'random-meal',
    element:<RandomMeal/>
  }]
    
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
