import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,

}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        // state = current state
        // action = make a dispatch from the component to the data layer
        setOriginData: (state, action) => {
            state.origin = action.payload;
        },
        setDestinationData: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    }
})

// destructuring -- push information into data
export const { setOriginData, setDestinationData, setTravelTimeInformation } = navSlice.actions;

// Selectors -- to pull information from elsewhere in the app
// good prac is to have selector for each one
// accesing the state and do a direct return (if without the {})
// whenever we call this selector, it shud go into the state dont have the origin, and give the current value in the data
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

// connect us to the store.js
export default navSlice.reducer;