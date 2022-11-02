import { infoWar } from '../../utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import s from './InfoWar.module.scss';

const InfoWar = () => {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.leftInfo}>{infoWar.day} день війни:</div>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          className={`mySwiper ${s.swiper}`}
        >
          <div className={s.wrapSlide}>
            {infoWar.info.map(el => {
              return (
                <SwiperSlide key={el.id} className={s.swiperSlide}>
                  {/* <img href={ } /> */}
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default InfoWar;
