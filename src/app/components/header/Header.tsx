import styles from './Header.module.scss';

function HeaderComponent() {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>Header</div>
            <div className={styles.header__navigation}>
                <a className="app-a">Home</a>
            </div>
        </div>
    );
}

export default HeaderComponent;
