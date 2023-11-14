import LangSwitcher from '@app/shared/buttons/langSwitcher/LangSwitcher';
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
                    <LangSwitcher />
                </div>
            </ContainerLayout>
        </div>
    );
};

export default TopBar;
