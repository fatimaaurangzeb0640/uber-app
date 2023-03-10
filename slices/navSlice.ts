import { createSlice } from "@reduxjs/toolkit";
import { navSliceState } from "./types";
import type {PayloadAction} from '@reduxjs/toolkit'

const initialState ={
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        setOrigin:(state: navSliceState, action: PayloadAction<string>)=>{
            state.origin = action.payload
        },
        setDestination:(state: navSliceState, action: PayloadAction<string>)=>{
            state.destination = action.payload
        },
        setTravelTimeInformation:(state: navSliceState, action: PayloadAction<string>)=>{
            state.travelTimeInformation = action.payload
        }
    }
})

export const {
    setOrigin,
    setDestination,
    setTravelTimeInformation
} = navSlice.actions

// Selectors
export const selectOrigin = (state: navSliceState) => state.origin
export const selectDestination = (state: navSliceState) => state.destination
export const selectTravelTimeInformation = (state: navSliceState) => state.travelTimeInformation

export default navSlice.reducer