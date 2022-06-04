import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICities} from "../../types/ICity";

interface ICitySlice {
    city: {
        name: string | undefined,
        lon: number | undefined,
        lat: number | undefined,
        country: string | undefined,
        state?: string
    };
    searchedCities: ICities[];
}

const initialState: ICitySlice = {
  city: {
      name: undefined,
      lon: undefined,
      lat: undefined,
      country: undefined,
      state: undefined
  },
    searchedCities: [],
}

const citySlice = createSlice({
        name: "city",
        initialState,
        reducers: {
            setCity(state, action: PayloadAction<ICities>) {
              state.city = {...action.payload}
            },
            setSearchedCities(state, action: PayloadAction<ICities[]>) {
                state.searchedCities = action.payload;
            }
        }
    }
)

export const cityActions = citySlice.actions
export default citySlice.reducer;