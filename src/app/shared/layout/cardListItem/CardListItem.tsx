import { ICardListItem } from '@app/models/frontend/cardItem';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CardListItem.module.scss';

const CardListItem: React.FC<ICardListItem> = ({ btn, title, img }) => {
    return (
        <div className={styles.cardItem}>
            <Image src={img} alt="" width="40" height="40" />
            <h3>{title}</h3>
            <Link href="">
                {btn}
                <Image
                    src="/static/icons/right-arrow.svg"
                    alt=""
                    width="9"
                    height="9"
                />
            </Link>
        </div>
    );
};

export default CardListItem;
