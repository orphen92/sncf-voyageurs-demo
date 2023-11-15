import { IBigBlock } from '@app/models/frontend/bigBlock';
import Button from '@app/shared/buttons/button/Button';
import Image from 'next/image';
import styles from './BigBlock.module.scss';

const BigBlock: React.FC<IBigBlock> = ({ title, btn, url, img }) => {
    return (
        <div className={styles.bigBlock}>
            <div
                className={`${styles.bigBlock__block} ${styles.bigBlock__contentWrap}`}
            >
                <h1>{title}</h1>
                <div>
                    <Button url={url} colorsClass={styles.btnCommon}>
                        {btn}
                    </Button>
                </div>
            </div>
            <div
                className={`${styles.bigBlock__block} ${styles.bigBlock__imageWrap}`}
            >
                <Image src={img} alt="" width="1144" height="840" />
            </div>
        </div>
    );
};

export default BigBlock;
