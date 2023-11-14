import * as fromActions from './lang.actions';

export interface LangState {
    lang: string;
}

export const initialState: LangState = {
    lang: 'fr',
};

export function reducer(
    state = initialState,
    action: fromActions.All
): LangState {
    switch (action.type) {
        case fromActions.Types.SET_LANG: {
            return {
                ...state,
                lang: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
