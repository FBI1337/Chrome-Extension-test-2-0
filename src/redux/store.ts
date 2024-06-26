import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countrySlice';

const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
