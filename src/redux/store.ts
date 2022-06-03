import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {citiesApi} from "../services/citiesService";
import citySlice from "./slices/citySlice";
import {weatherApi} from "../services/weatherService";
import weatherSlice from "./slices/weatherSlice";

const rootReducer = combineReducers({
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    city: citySlice,
    weather: weatherSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(citiesApi.middleware, weatherApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;