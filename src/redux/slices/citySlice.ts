import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICities} from "../../types/ICity";

interface IInitialState {
    name: string | undefined,
    lon: number | undefined,
    lat: number | undefined,
    country: string | undefined,
    state?: string
}

const initialState: IInitialState = {
    name: undefined,
    lon: undefined,
    lat: undefined,
    country: undefined,
    state: undefined
}

const citySlice = createSlice({
        name: "city",
        initialState,
        reducers: {
            setCity(state, action: PayloadAction<ICities>) {
                state.name = action.payload.name;
                state.lon = action.payload.lon;
                state.lat = action.payload.lat;
                state.country = action.payload.country;
                if (action.payload.state) state.state = action.payload.state
            }
        }
    }
)

export const cityActions = citySlice.actions
export default citySlice.reducer;