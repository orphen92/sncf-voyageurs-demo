import { IBigMenu } from '@app/models/frontend/bigMenu';
import { NavLink } from '@app/models/frontend/navLink';
import styles from './BigMenu.module.scss';

interface BigMenuProps {
    menuData: IBigMenu;
}

const BigMenu: React.FC<BigMenuProps> = ({ menuData }) => {
    const data = menuData;

    console.log(data);

    return (
        <div className={styles.bigMenu}>
            <div className={styles.bigMenu__wrapper}>
                <div className={styles.bigMenu__first}>
                    <div className={styles.bigMenu__menu}>
                        <p className={styles.bigMenu__menu__title}>
                            {data.title}
                        </p>
                        <nav className={styles.bigMenu__menu__nav}>
                            <ul>
                                {data.nav.map(
                                    (link: NavLink, index: number) => (
                                        <li key={`0_${index}`}>
                                            <div
                                                className={styles.bigMenu__item}
                                            >
                                                {link.name}
                                            </div>
                                            {link.subNav &&
                                                link.subNav.length > 0 && (
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
                                                                    index: number
                                                                ) => {
                                                                    return (
                                                                        <li
                                                                            key={`1_${index}`}
                                                                            className={
                                                                                styles.subMenu__item
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    sublink.name
                                                                                }
                                                                            </span>
                                                                            {sublink.subNav &&
                                                                                sublink
                                                                                    .subNav
                                                                                    .length >
                                                                                    0 && (
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
                                                                                                    sublink: NavLink,
                                                                                                    index: number
                                                                                                ) => {
                                                                                                    return (
                                                                                                        <li
                                                                                                            key={`2_${index}`}
                                                                                                            className={
                                                                                                                styles.subMenu__item
                                                                                                            }
                                                                                                        >
                                                                                                            {
                                                                                                                sublink.name
                                                                                                            }
                                                                                                        </li>
                                                                                                    );
                                                                                                }
                                                                                            )}
                                                                                        </ul>
                                                                                    </div>
                                                                                )}
                                                                        </li>
                                                                    );
                                                                }
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
