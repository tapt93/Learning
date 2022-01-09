import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "./type";

const initialState: ThemeState = {
  themeMode: 'light'
}
const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeState>) {
      state.themeMode = action.payload.themeMode
    }
  },
});

export const { actions: themeActions, reducer } = slice;