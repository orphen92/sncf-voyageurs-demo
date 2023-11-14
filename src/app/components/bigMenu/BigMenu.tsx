import { IBigMenu } from '@app/models/frontend/bigMenu';
import { NavLink } from '@app/models/frontend/navLink';
import React, { useState } from 'react';
import styles from './BigMenu.module.scss';

interface BigMenuProps {
    menuData: IBigMenu;
}

const BigMenu: React.FC<BigMenuProps> = ({ menuData }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState<number | null>(
        null
    );

    const handleMenuClick = (index: number) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
        // reset submenu state
        setActiveSubSubMenu(null);
    };

    const handleSubMenuClick = (index: number) => {
        setActiveSubSubMenu(activeSubSubMenu === index ? null : index);
    };

    return (
        <div className={styles.bigMenu}>
            <div className={styles.bigMenu__wrapper}>
                <div className={styles.bigMenu__first}>
                    <div className={styles.bigMenu__menu}>
                        <p className={styles.bigMenu__menu__title}>
                            {menuData.title}
                        </p>
                        <nav className={styles.bigMenu__menu__nav}>
                            <ul>
                                {menuData.nav.map(
                                    (link: NavLink, index: number) => (
                                        <li key={`0_${index}`}>
                                            <div
                                                className={styles.bigMenu__item}
                                                onClick={() =>
                                                    handleMenuClick(index)
                                                }
                                            >
                                                {link.name}
                                            </div>
                                            {link.subNav &&
                                                link.subNav.length > 0 &&
                                                activeSubMenu === index && (
                                                    <div
                                                        className={
                                                            styles.bigMenu__subnav
                                                        }
                                                    >
                                                        <p
                                                            className={
                                                                styles.subMenu__subtitle
                                                            }
                                                        >
                                                            title
                                                        </p>
                                                        <ul>
                                                            {link.subNav.map(
                                                                (
                                                                    sublink: NavLink,
                                                                    subIndex: number
                                                                ) => (
                                                                    <li
                                                                        key={`1_${subIndex}`}
                                                                        className={
                                                                            styles.subMenu__item
                                                                        }
                                                                    >
                                                                        <div
                                                                            onClick={() =>
                                                                                handleSubMenuClick(
                                                                                    subIndex
                                                                                )
                                                                            }
                                                                            className={
                                                                                styles.bigMenu__item
                                                                            }
                                                                        >
                                                                            {
                                                                                sublink.name
                                                                            }
                                                                        </div>
                                                                        {sublink.subNav &&
                                                                            sublink
                                                                                .subNav
                                                                                .length >
                                                                                0 &&
                                                                            activeSubSubMenu ===
                                                                                subIndex && (
                                                                                <div
                                                                                    className={
                                                                                        styles.bigMenu__subnav
                                                                                    }
                                                                                >
                                                                                    <p
                                                                                        className={
                                                                                            styles.subMenu__subtitle
                                                                                        }
                                                                                    >
                                                                                        title
                                                                                    </p>
                                                                                    <ul>
                                                                                        {sublink.subNav.map(
                                                                                            (
                                                                                                subsublink: NavLink,
                                                                                                subsubIndex: number
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={`2_${subsubIndex}`}
                                                                                                    className={
                                                                                                        styles.subMenu__item
                                                                                                    }
                                                                                                >
                                                                                                    {
                                                                                                        subsublink.name
                                                                                                    }
                                                                                                </li>
                                                                                            )
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigMenu;
