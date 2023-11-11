import styles from './Footer.module.scss';

function FooterComponent() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__title}>Footer</div>
            <div className={styles.footer__navigation}>
                <a className="app-a">footer</a>
            </div>
        </div>
    );
}

export default FooterComponent;
