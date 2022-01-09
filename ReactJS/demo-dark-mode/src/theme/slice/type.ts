import { themes } from '..';

export type ThemeKeyType = keyof typeof themes;

export interface ThemeState {
  themeMode: ThemeKeyType;
}
