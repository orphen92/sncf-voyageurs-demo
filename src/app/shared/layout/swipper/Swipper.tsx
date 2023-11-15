import { ICardImg } from '@app/models/frontend/cardImg';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardImg from '../cardImg/CardImg';
import styles from './Swipper.module.scss';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
export interface ISwipper {
    swiperData: any;
}

const Swipper: React.FC<ISwipper> = ({ swiperData }) => {
    const data = swiperData;

    const [cardData, setcardData] = useState(data['france']);
    const [activeFilter, setActiveFilter] = useState(data.filter[0].key);
    const [swipper, setSwipperRef] = useState<any>(null);
    const [isSwipperPause, setIsSwipperPause] = useState<any>(false);

    function changeDataHandler(id: string): void {
        if (id === 'eu') {
            setcardData(data['europe']);
        } else {
            setcardData(data['france']);
        }
        setActiveFilter(id);
        swipper.update();
    }

    function toggleAutoplayHandle() {
        setIsSwipperPause(!isSwipperPause);
        isSwipperPause ? swipper.autoplay.start() : swipper.autoplay.stop();
    }

    return (
        <div className={styles.swipperContainer}>
            <div className={styles.swipperContainer__filter}>
                <nav>
                    <button
                        className={
                            activeFilter === data.filter[0].key
                                ? styles.active
                                : ''
                        }
                        onClick={() => {
                            changeDataHandler(data.filter[0].key);
                        }}
                    >
                        {data.filter[0].value}
                    </button>
                    <button
                        className={
                            activeFilter === data.filter[1].key
                                ? styles.active
                                : ''
                        }
                        onClick={() => {
                            changeDataHandler(data.filter[1].key);
                        }}
                    >
                        {data.filter[1].value}
                    </button>
                </nav>
            </div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                onSwiper={setSwipperRef}
                navigation={{
                    prevEl: '.slidePrev',
                    nextEl: '.slideNext',
                }}
                pagination={{
                    el: '.pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}"></span>`;
                    },
                }}
                slidesPerView={3}
                loop={true}
                autoplay={true}
            >
                {cardData.map((card: ICardImg, index: number) => (
                    <SwiperSlide key={index}>
                        <CardImg
                            title={card.title}
                            text={card.text}
                            btn={data.btn}
                            img={card.img}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.controls}>
                <div
                    onClick={() => swipper.slidePrev()}
                    className={styles.slidePrev}
                >
                    <Image
                        src="/static/icons/chevron_left.svg"
                        alt=""
                        width="8"
                        height="12"
                    />
                </div>
                <div className={styles.pagination}>
                    <div className="pagination"></div>
                </div>

                <div onClick={toggleAutoplayHandle}>
                    <Image
                        src={`/static/icons/ic-${
                            isSwipperPause ? 'play' : 'pause'
                        }.svg`}
                        alt=""
                        width="14"
                        height="14"
                    />
                </div>
                <div
                    onClick={() => swipper.slideNext()}
                    className={styles.slideNext}
                >
                    <Image
                        src="/static/icons/chevron_right.svg"
                        alt=""
                        width="8"
                        height="12"
                    />
                </div>
            </div>
        </div>
    );
};

export default Swipper;
