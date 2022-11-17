import { infoWar } from '../../utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import s from './InfoWar.module.scss';

/* import icon*/
import airplane from '../../images/icon/war/airplane.svg';
import artillery from '../../images/icon/war/artillery.svg';
import bmp from '../../images/icon/war/bmp.svg';
import helicopter from '../../images/icon/war/helicopter.svg';
import rocket from '../../images/icon/war/rocket.svg';
import soldiers from '../../images/icon/war/soldiers.svg';
import tank from '../../images/icon/war/tank.svg';

const icon = {
  airplane,
  artillery,
  bmp,
  helicopter,
  rocket,
  soldiers,
  tank,
};

const InfoWar = () => {
  return (
    <section className={s.section} id={'war'}>
      <div className={s.wrap}>
        <div className={s.leftInfo}>
          <p className={s.dayWar}>{infoWar.day} день війни:</p>
        </div>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          className={`mySwiper ${s.swiper}`}
        >
          <div className={s.wrapSlide}>
            {infoWar.info.map(el => {
              return (
                <SwiperSlide key={el.id} className={s.swiperSlide}>
                  <img
                    src={icon[el.icon]}
                    alt={el.title}
                    width={18}
                    height={20}
                    className={s.icon}
                  />
                  <p>
                    {el.title} <span className={s.amount}>{el.amount}</span>
                  </p>
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
