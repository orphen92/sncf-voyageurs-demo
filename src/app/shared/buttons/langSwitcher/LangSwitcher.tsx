import { useState } from 'react';

import Image from 'next/image';

import { changeLang, useLang } from '@app/context/lang.context';
import styles from './LangSwitcher.module.scss';

export interface ILangSwitcher {}

const LangSwitcher: React.FC<ILangSwitcher> = () => {
    const { dispatch } = useLang();
    const [lang, setLang] = useState({
        code: 'fr',
        name: 'Français',
    });

    const [isOpen, setIsOpen] = useState(false);

    function switchLang(lang: string) {
        if (lang === 'fr') {
            setLang({ code: 'fr', name: 'Français' });
        } else if (lang === 'en') {
            setLang({ code: 'en', name: 'English' });
        }
        changeLang(dispatch, lang);

        toggleMenu();
    }

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={styles.langswrapper}>
                <button
                    type="button"
                    className={`${styles.langswitcher} ${
                        isOpen && styles.langswitcher__active
                    }`}
                    onClick={toggleMenu}
                >
                    <div>
                        <Image
                            alt=""
                            width="12"
                            height="12"
                            src={`/static/icons/flag_${lang.code}.svg`}
                        />
                        <span>{lang.name}</span>
                    </div>
                    <span className={styles.svgArrow}>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </button>

                {isOpen && (
                    <ul className={styles.submenu}>
                        <li
                            onClick={() => {
                                switchLang('fr');
                            }}
                        >
                            <div>
                                <Image
                                    alt=""
                                    width="12"
                                    height="12"
                                    src="/static/icons/flag_fr.svg"
                                />
                                <span>Français</span>
                            </div>
                        </li>
                        <li
                            onClick={() => {
                                switchLang('en');
                            }}
                        >
                            <div>
                                <Image
                                    alt=""
                                    width="12"
                                    height="12"
                                    src="/static/icons/flag_en.svg"
                                />
                                <span>English</span>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
            {isOpen && <div className={styles.mask} onClick={toggleMenu} />}
        </>
    );
};

export default LangSwitcher;
