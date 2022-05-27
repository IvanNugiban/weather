import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {citiesApi} from "../services/citiesService";
import citySlice from "./slices/citySlice";

const rootReducer = combineReducers({
    [citiesApi.reducerPath]: citiesApi.reducer,
    city: citySlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(citiesApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;