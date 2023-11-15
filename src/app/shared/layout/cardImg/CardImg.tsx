import Image from 'next/image';

import { ICardImg } from '@app/models/frontend/cardImg';
import Link from 'next/link';
import styles from './CardImg.module.scss';

const CardImg: React.FC<ICardImg> = ({ title, text, btn, img }) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Card__container}>
                <h3>{title}</h3>
                <Image src={img} alt="" width="312" height="167" />
                <p>{text}</p>
                <Link href="#">
                    {btn}
                    <Image
                        src="/static/icons/right-arrow.svg"
                        alt=""
                        width="9"
                        height="9"
                    />
                </Link>
            </div>
        </div>
    );
};

export default CardImg;
