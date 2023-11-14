export enum Types {
    SET_LANG = '[Lang] Setting language: ok!',
}

export const setLang = (lang: string) => ({
    type: Types.SET_LANG,
    payload: lang,
});

export type All = ReturnType<typeof setLang>;
