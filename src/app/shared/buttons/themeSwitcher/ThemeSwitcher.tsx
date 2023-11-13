import { ChangeEvent } from 'react';

import { changeTheme, useTheme } from '@app/context/theme.context';

import Image from 'next/image';

import styles from './ThemeSwitcher.module.scss';

export interface IThemeSwitcher {}

const ThemeSwitcher: React.FC<IThemeSwitcher> = () => {
    const { state, dispatch } = useTheme();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const newTheme = event.target.checked ? 'dark' : 'default';
        changeTheme(dispatch, newTheme);
    }

    return (
        <div className={styles.switch}>
            <Image
                alt=""
                width="16"
                height="16"
                src="/static/icons/light_mode.svg"
                title="Mode clair"
            />

            <label>
                <input
                    type="checkbox"
                    role="switch"
                    aria-checked="false"
                    className="sr-only"
                    onChange={handleChange}
                />
                <div className={styles.switch__rounded}></div>
            </label>

            <Image
                alt=""
                width="16"
                height="16"
                src="/static/icons/dark_mode.svg"
                title="Mode sombre"
            />
        </div>
    );
};

export default ThemeSwitcher;
