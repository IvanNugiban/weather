export interface IWeather {
    cod: string,
    message: number,
    cnt : number,
    list: IWeatherItem[],
    "city": {
        "id": number,
        "name": string,
        "coord": {
            "lat": number,
            "lon": number
        },
        "country": string,
        "population": number,
        "timezone": number,
        "sunrise": number,
        "sunset": number
    }
}

export interface IWeatherItem{
    dt: string,
        main: {
            "temp": number,
            "feels_like": number,
            "temp_min": number,
            "temp_max": number,
            "pressure": number,
            "sea_level": number,
            "grnd_level": number,
            "humidity": number,
            "temp_kf": number
        },
        "weather": [
            {
                "id": number,
                "main": string,
                "description": string,
            }
        ],
        "clouds": {
            "all": number
        },
        "wind": {
            "speed": number,
            "deg": number,
            "gust": number
        },
        "visibility": number,
        "pop": number,
        "sys": {
            "pod": string
        },
        "dt_txt": string
}
