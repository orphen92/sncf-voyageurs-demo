import * as langActions from '@app/store/lang/lang.actions';
import { LangState, initialState, reducer } from '@app/store/lang/lang.reducer';
import React, {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';

interface LangContextProps {
    state: LangState;
    dispatch: Dispatch<langActions.All>;
    langData: any;
}

interface LangProviderProps {
    children: ReactNode;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [langData, setLangData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/datas/${state.lang}/dummy_data.json`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                setLangData(data);

                dispatch(langActions.setLang(state.lang));
            } catch (error) {
                console.error('Error when try to getting Dummy data:', error);
            }
        };

        fetchData();
    }, [state.lang]);

    return (
        <LangContext.Provider value={{ state, dispatch, langData }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const changeLang = (dispatch: Dispatch<any>, lang: string) => {
    dispatch(langActions.setLang(lang));
};
