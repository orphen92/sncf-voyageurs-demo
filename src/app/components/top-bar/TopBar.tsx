import styles from './TopBar.module.scss';

function TopBarComponent() {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbar__title}>topbar</div>
            <div className={styles.topbar__navigation}>
                <a className="app-a">topbar</a>
            </div>
        </div>
    );
}

export default TopBarComponent;
