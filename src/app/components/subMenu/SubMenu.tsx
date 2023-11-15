import { NavLink } from '@app/models/frontend/navLink';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './SubMenu.module.scss';

interface SubMenuProps {
    subNav: NavLink[];
    currentName: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ subNav, currentName }) => {
    const [activeSubSubMenu, setActiveSubSubMenu] = useState<number | null>(
        null
    );

    const handleSubMenuClick = (index: number) => {
        setActiveSubSubMenu(activeSubSubMenu === index ? null : index);
    };

    return (
        <div className={styles.subnav}>
            <p className={styles.subnav__subtitle}>{currentName}</p>
            <ul>
                {subNav.map((sublink: NavLink, subIndex: number) => (
                    <li
                        key={`1_${subIndex}`}
                        className={
                            styles.subnav__item + sublink.subNav &&
                            activeSubSubMenu === subIndex
                                ? styles.active
                                : ''
                        }
                    >
                        <div
                            onClick={() => handleSubMenuClick(subIndex)}
                            className={styles.subnav__item}
                        >
                            <span>{sublink.name}</span>
                            {sublink.subNav && sublink.subNav.length > 0 && (
                                <Image
                                    src="/static/icons/chevron_right.svg"
                                    alt=""
                                    width="8"
                                    height="12"
                                />
                            )}
                        </div>
                        {sublink.subNav &&
                            sublink.subNav.length > 0 &&
                            activeSubSubMenu === subIndex && (
                                <SubMenu
                                    subNav={sublink.subNav}
                                    currentName={sublink.name}
                                />
                            )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubMenu;
