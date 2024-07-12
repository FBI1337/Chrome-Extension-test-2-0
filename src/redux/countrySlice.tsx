import { createSlice } from "@reduxjs/toolkit";
import russia from '../components/Shared/Countres/russia.png';
import usa from '../components/Shared/Countres/usa.png';
import germany from '../components/Shared/Countres/germany.png';
import brazil from '../components/Shared/Countres/brazil.png';    
import italy from '../components/Shared/Countres/italy.png';
import canada from '../components/Shared/Countres/canada.png';
import argentina from '../components/Shared/Countres/argentina.png';
import france from '../components/Shared/Countres/france.png';
import en from '../components/Shared/Countres/en.png';


const initialState = {
    countriesList: [
    { img: russia, country: 'Russia', id: 0 },
    { img: usa, country: 'USA', id: 1 },
    { img: germany, country: 'Germany', id: 2 },
    { img: brazil, country: 'Brazil', id: 3 },
    { img: italy, country: 'Italy', id: 4 },
    { img: canada, country: 'Canada', id: 5 },
    { img: argentina, country: 'Argentina', id: 6 },
    { img: france, country: 'France', id: 7 },
    { img: en, country: 'United Kingdom', id: 8 }
],

selectedCountry: null
}; 

const countresSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectCountry: (state, action) => {
            state.selectedCountry = action.payload;
        }
    }
})

export const { selectCountry } = countresSlice.actions;
export default countresSlice.reducer;