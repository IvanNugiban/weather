import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {citiesApi} from "../services/citiesService";
import citySlice from "./slices/citySlice";
import {weatherApi} from "../services/weatherService";

const rootReducer = combineReducers({
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    city: citySlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(citiesApi.middleware, weatherApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;