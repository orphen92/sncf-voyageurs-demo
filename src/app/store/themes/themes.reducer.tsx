import * as fromActions from './themes.actions';

export interface ThemesState {
    theme: string;
}

export const initialState: ThemesState = {
    theme: 'default',
};

export function reducer(
    state = initialState,
    action: fromActions.All
): ThemesState {
    switch (action.type) {
        case fromActions.Types.SET_THEME: {
            return {
                ...state,
                theme: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
