import {configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer ,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
import mealSlice from './mealSlice'

const persistConfig={
    key:"root",
    storage:storage
}

const persistedReducer= persistReducer(persistConfig,mealSlice )

const store=configureStore({
    reducer:{
        meals:persistedReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

const persistor=persistStore(store);

export {store , persistor};