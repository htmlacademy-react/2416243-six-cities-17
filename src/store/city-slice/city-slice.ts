import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CitySlice} from '../../types/state.ts';
import {Cities, NameSpace} from '../../const.ts';
import {CityType} from '../../types/offer.ts';

const initialState: CitySlice = {
  city: Cities.PARIS
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    }
  }
});

export const {changeCity} = citySlice.actions;
