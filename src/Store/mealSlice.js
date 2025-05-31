import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null
}

const mealSlice =createSlice({
    name:"meals",
    initialState,
    reducers:{
        addMeals:(state,action)=>{
            // const receivedData = action.payload.map(item=> state.data.map(storeData=> storeData.filter(storeData.idMeal!==item.idMeal)))
            // state.data = receivedData;
            state.data = state.data !== null ? 
            state.data.data.filter(data=> data.idMeal !== action.payload.data.data )  : 
            action.payload 
        }
    }
})

export const { addMeals}=mealSlice.actions;
export default mealSlice.reducer