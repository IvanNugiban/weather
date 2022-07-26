import {createSlice} from "@reduxjs/toolkit";
import {DefaultTheme} from "styled-components";
import {ClearTheme, CloudsTheme, RainTheme, SnowTheme} from "../../styles/theme";

interface IInitialState {
    theme: DefaultTheme;
}

const initialState : IInitialState = {
    theme: ClearTheme,
}

const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
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