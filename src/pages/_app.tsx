import { LangProvider } from '@app/context/lang.context';
import { ThemeProvider } from '@app/context/theme.context';
import '@src/styles/main.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LangProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </LangProvider>
    );
}
