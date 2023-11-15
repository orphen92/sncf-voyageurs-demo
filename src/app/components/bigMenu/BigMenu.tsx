import { IBigMenu } from '@app/models/frontend/bigMenu';
import { NavLink } from '@app/models/frontend/navLink';
import Image from 'next/image';
import React, { useState } from 'react';
import SubMenu from '../subMenu/SubMenu';
import styles from './BigMenu.module.scss';

interface BigMenuProps {
    menuData: IBigMenu;
    isOpen: boolean;
}

const BigMenu: React.FC<BigMenuProps> = ({ menuData, isOpen }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <>
            <div className={`${styles.bigMenu} ${isOpen && styles.active}`}>
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
                                            <li
                                                key={`0_${index}`}
                                                className={
                                                    link.subNav &&
                                                    activeSubMenu === index
                                                        ? styles.active
                                                        : ''
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.bigMenu__item
                                                    }
                                                    onClick={() =>
                                                        handleMenuClick(index)
                                                    }
                                                >
                                                    <span>{link.name}</span>
                                                    {link.subNav &&
                                                        link.subNav.length >
                                                            0 && (
                                                            <Image
                                                                src="/static/icons/chevron_right.svg"
                                                                alt=""
                                                                width="8"
                                                                height="12"
                                                            />
                                                        )}
                                                </div>
                                                {link.subNav &&
                                                    link.subNav.length > 0 &&
                                                    activeSubMenu === index && (
                                                        <SubMenu
                                                            subNav={link.subNav}
                                                            currentName={
                                                                link.name
                                                            }
                                                        />
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
            {isOpen && <div className={styles.mask}></div>}
        </>
    );
};

export default BigMenu;
