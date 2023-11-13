import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

export interface IContainer {
    children: ReactNode;
}

const ContainerLayout: React.FC<IContainer> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default ContainerLayout;
