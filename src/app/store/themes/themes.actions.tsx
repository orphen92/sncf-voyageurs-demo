export enum Types {
    SET_THEME = '[Theme] Setting theme: ok!',
}

export const setTheme = (theme: string) => ({
    type: Types.SET_THEME,
    payload: theme,
});

export type All = ReturnType<typeof setTheme>;
