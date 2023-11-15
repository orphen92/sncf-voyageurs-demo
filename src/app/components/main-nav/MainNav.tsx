import ContainerLayout from '@app/shared/layout/container/Container';
import styles from './MainNav.module.scss';

import { useLang } from '@app/context/lang.context';
import { IBigMenu } from '@app/models/frontend/bigMenu';
import { NavLink } from '@app/models/frontend/navLink';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BigMenu from '../bigMenu/BigMenu';

export interface IMainNav {}

const MainNav: React.FC<IMainNav> = () => {
    const { langData } = useLang();

    const btnData =
        langData && langData.menuBar ? langData.menuBar.accountBtn : null;

    const mainNavData =
        langData && langData.mainMenu ? langData.mainMenu : null;

    const bigMenuData = langData && langData.bigMenu ? langData.bigMenu : null;

    const [selectedMenuData, setSelectedMenuData] = useState<{
        [key: string]: IBigMenu | null;
    }>({});

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function openMenu(id: string): void {
        // Close previous menu
        const updatedMenuData = Object.keys(selectedMenuData).reduce(
            (acc, menuId) => ({
                ...acc,
                [menuId]: menuId === id ? selectedMenuData[menuId] : null,
            }),
            {}
        );

        // Open new previous menu
        const menuData = bigMenuData.find((menu: IBigMenu) => menu.id === id);
        setSelectedMenuData({ ...updatedMenuData, [id]: menuData });

        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={styles.mainNav}>
                <ContainerLayout>
                    <div className={styles.mainNav__wrapper}>
                        <div className={styles.mainNav__logo}>
                            <Link href="/">
                                <Image
                                    src="/static/medias/logo-sncv.svg"
                                    alt=""
                                    width="44"
                                    height="32"
                                />
                            </Link>
                        </div>
                        <nav className={styles.mainNav__nav}>
                            <ul>
                                {mainNavData.map((nav: NavLink) => {
                                    return (
                                        <li key={nav.id}>
                                            <span
                                                onClick={() => {
                                                    openMenu(nav.id);
                                                }}
                                            >
                                                {nav.name}
                                            </span>
                                            {selectedMenuData[nav.id] && (
                                                <BigMenu
                                                    menuData={
                                                        selectedMenuData[nav.id]
                                                    }
                                                    isOpen={isOpen}
                                                />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <Link
                            className={styles.mainNav__btn}
                            href={btnData.url}
                        >
                            <div className={styles.mainNav__icon}>
                                <Image
                                    src="/static/icons/person.svg"
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                            </div>
                            <span>{btnData.name}</span>
                        </Link>
                    </div>
                </ContainerLayout>
            </div>
        </>
    );
};

export default MainNav;
