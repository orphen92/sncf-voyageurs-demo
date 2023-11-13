// themes.selectors.tsx
import { ThemesState } from './themes.reducer';

export const selectTheme = (state: ThemesState) => state.theme;
