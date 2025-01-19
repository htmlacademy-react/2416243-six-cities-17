import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CitySlice} from '../../types/state.ts';
import {Cities} from '../../const.ts';
import {CityType} from '../../types/offer.ts';

const initialState: CitySlice = {
  city: Cities.PARIS
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    }
  }
});

export const {changeCity} = citySlice.actions;
