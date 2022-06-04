import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICities} from "../types/ICity";

interface IParams {
    cityName: string;
    limit: number;
}

export const citiesApi = createApi({
    reducerPath: "citiesApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/geo/1.0"}),
    endpoints: (builder) => ({
        getCities: builder.query<ICities[], IParams>({
            query: (info: IParams) => ({
                url: "/direct",
                params: {
                    q: info.cityName,
                    limit: info.limit,
                    appid: "d8ad3325da8b98ce023fe8bcac7dda90"
                }
            })
        })
    })
})

export const {useGetCitiesQuery} = citiesApi;