import { useEffect, useRef, useState } from 'react';
import { heroSlider } from '../../utils/utils';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import styles
import 'swiper/css';
import s from './Hero.module.scss';

const Hero = () => {
  const [slide, setSlide] = useState(heroSlider[0]);
  const sectionRef = useRef();

  useEffect(() => {
    sectionRef.current.style.backgroundImage = `linear-gradient( 180deg, rgba(21, 35, 56, 0.4) 0%, rgba(17, 29, 46, 0.3) 17.71%, rgba(17, 29, 46, 0.3) 57.81%, rgba(24, 40, 64, 0.8) 100% ), url(${slide.img}`;
  }, [slide]);

  const handleClickSlide = el => {
    setSlide(el);
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <h1 className={s.title}>{slide?.title}</h1>
      </Container>
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
          {heroSlider.map(el => {
            const title = el.title.length > 50 ? el.title.slice(0, 50) + '...' : el.title;
            const opcity = slide.id !== el.id ? '0.7' : '1.0';
            return (
              <SwiperSlide key={el.title} className={s.slide} style={{ opacity: `${opcity}` }}>
                <div onClick={() => handleClickSlide(el)} className={s.slide__wrap}>
                  <img
                    src={el.img}
                    alt={el.title}
                    height={64}
                    width={64}
                    className={s.slide__img}
                  />
                  <h3>{title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
