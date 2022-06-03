import {ActionCreatorWithPayload, createSlice} from "@reduxjs/toolkit";
import {ITheme} from "../../styles/interfaces/ITheme/ITheme";
import {DefaultTheme} from "styled-components";
import {ClearTheme, CloudsTheme, RainTheme, SnowTheme} from "../../styles/theme";

interface IInitialState {
    numberOfRequests: number;
    type: "Now" | "Hourly" | "Daily";
    theme: DefaultTheme;
}

const initialState : IInitialState = {
    numberOfRequests: 1,
    type: "Now",
    theme: ClearTheme,
}

const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        setNowWeather(state) {
            state.type = "Now"
        state.numberOfRequests =1;
        },
        setHourlyWeather(state) {
            state.type = "Hourly"
            state.numberOfRequests = 9;
        },
        setDailyWeather(state) {
            state.type = "Daily"
            state.numberOfRequests = 40;
        },
        setTheme(state, action) {
            if (action.payload === "Clouds") state.theme = CloudsTheme;
            else if (action.payload === "Rain") state.theme = RainTheme;
            else if (action.payload === "Snow") state.theme = SnowTheme;
            else state.theme = ClearTheme;
        }
    }
})

export default weatherSlice.reducer;

export const weatherActions = weatherSlice.actions;