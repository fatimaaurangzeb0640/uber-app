import { createSlice } from "@reduxjs/toolkit";
import { navSliceStateType } from "./types";
import type {PayloadAction} from '@reduxjs/toolkit'
import { placeInfoType } from "./types";

const initialState: navSliceStateType ={
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        setOrigin:(state: any, action: PayloadAction<placeInfoType>)=>{
            state.origin = action.payload
        },
        setDestination:(state: any, action: PayloadAction<placeInfoType | null>)=>{
            state.destination = action.payload
        },
        setTravelTimeInformation:(state: any, action: PayloadAction<string>)=>{
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
export const selectOrigin = (state: any) => state.origin
export const selectDestination = (state: any) => state.destination
export const selectTravelTimeInformation = (state: any) => state.travelTimeInformation

export default navSlice.reducer