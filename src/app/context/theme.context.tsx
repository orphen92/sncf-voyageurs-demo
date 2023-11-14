import * as themeActions from '@app/store/themes/themes.actions';
import {
    ThemesState,
    initialState,
    reducer,
} from '@app/store/themes/themes.reducer';
import React, {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react';

interface ThemeContextProps {
    state: ThemesState;
    dispatch: Dispatch<any>;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        document.documentElement.className = '';
        // Add default class to html tag
        document.documentElement.classList.add(`theme-${state.theme}`);
    }, [state.theme]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const changeTheme = (dispatch: Dispatch<any>, theme: string) => {
    dispatch(themeActions.setTheme(theme));
};
