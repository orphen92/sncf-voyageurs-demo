import { IOffer } from '@app/models/frontend/offer';
import { ITextBlock } from '@app/models/frontend/textBlock';
import CardListItem from '../cardListItem/CardListItem';
import ContainerLayout from '../container/Container';
import styles from './CardList.module.scss';

const CardList: React.FC<IOffer> = ({ title, btn, data }) => {
    return (
        <div className={styles.CardList}>
            <ContainerLayout>
                <h2>{title}</h2>
                <div className={styles.CardList__list}>
                    {data.map((card: ITextBlock, index: number) => (
                        <div key={index}>
                            <CardListItem
                                btn={btn}
                                title={card.title}
                                img={card.img}
                            />
                        </div>
                    ))}
                </div>
            </ContainerLayout>
        </div>
    );
};

export default CardList;
