import { NavLink } from '@app/models/frontend/navLink';
import React, { useState } from 'react';
import styles from './SubMenu.module.scss';

interface SubMenuProps {
    subNav: NavLink[];
}

const SubMenu: React.FC<SubMenuProps> = ({ subNav }) => {
    const [selectedSubNav, setSelectedSubNav] = useState<NavLink[]>([]);

    function openNav(link: NavLink) {
        if (link.subNav && link.subNav.length > 0) {
            setSelectedSubNav(link.subNav);
        } else {
            setSelectedSubNav([]);
        }
    }

    return (
        <>
            <div className={styles.menu}>
                <ul className={styles.subMenu}>
                    {subNav.map((link: NavLink, index: number) => (
                        <li
                            key={index}
                            onClick={() => {
                                openNav(link);
                            }}
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedSubNav.length > 0 && <SubMenu subNav={selectedSubNav} />}
        </>
    );
};

export default SubMenu;
