import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IWeather} from "../types/weatherType";

interface IParams {
    lon: number ,
    lat: number ,
    cnt: number
}


export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/data/2.5"}),
    endpoints: (builder) => ({
        getWeather: builder.query<IWeather, IParams>({
            query: ({ lon, lat, cnt} : IParams) => ({
                url: "/forecast",
                params: {
                    lon: lon,
                    lat: lat,
                    units: "metric",
                    cnt: cnt,
                    appid: "d8ad3325da8b98ce023fe8bcac7dda90"
                }
            })
        })
    })
})

export const {useGetWeatherQuery} = weatherApi;