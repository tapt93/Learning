import { themes } from "..";
import { RootState } from "../../app/store";

export const selectTheme = (state: RootState) => themes[state.theme.themeMode]