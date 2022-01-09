import { colors } from "./constants/colors"

const lightTheme = {
  body: colors.WHITE,
  color: colors.BLACK
}
const darkTheme: Theme = {
  body: colors.BLACK,
  color: colors.WHITE
}

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
