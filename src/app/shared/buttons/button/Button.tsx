import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface IButton {
    children: ReactNode;
    url: string;
    colorsClass?: string;
}

const Button: React.FC<IButton> = ({ url, children, colorsClass }) => {
    return (
        <Link className={`${styles.btn} ${colorsClass}`} href={url || ''}>
            {children}
        </Link>
    );
};

export default Button;
