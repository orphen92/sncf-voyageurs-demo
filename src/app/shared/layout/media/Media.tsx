import { ReactNode } from 'react';
import Container from '../container/Container';
import styles from './Media.module.scss';

export interface IMedia {
    children: ReactNode;
    title: string;
    text: string;
}

const Media: React.FC<IMedia> = ({ children, title, text }) => {
    return (
        <div className={styles.mediaBlock}>
            <Container>
                <h2>{title}</h2>
                <div className={styles.mediaBlock__intro}>{text}</div>
                <div className={styles.mediaBlock__container}>{children}</div>
            </Container>
        </div>
    );
};

export default Media;
