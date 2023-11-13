import ThemeSwitcher from '@app/shared/buttons/themeSwitcher/ThemeSwitcher';
import ContainerLayout from '@app/shared/layout/container/Container';
import styles from './TopBar.module.scss';

export interface ITopBar {}

const TopBar: React.FC<ITopBar> = () => {
    return (
        <div className={styles.topBar}>
            <ContainerLayout>
                <div className={styles.topBar__options}>
                    <ThemeSwitcher />
                    <div>lang switcher</div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default TopBar;
