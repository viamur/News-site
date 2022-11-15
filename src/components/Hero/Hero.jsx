import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroSlider } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import Container from '../Container/Container';

// Import styles
import 'swiper/css';
import sprite from '../../images/icon/sprite.svg';
import icon from '../../images/icon/hero/angle.svg';
import s from './Hero.module.scss';

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const sectionRef = useRef();

  const isDesk = useDeskScreen();

  useEffect(() => {
    sectionRef.current.style.backgroundImage = `linear-gradient( 180deg, rgba(21, 35, 56, 0.4) 0%, rgba(17, 29, 46, 0.3) 17.71%, rgba(17, 29, 46, 0.3) 57.81%, rgba(24, 40, 64, 0.8) 100% ), url(${heroSlider[slide].img}`;
  }, [slide]);

  /* Контроллер слайдов */
  const handleControl = name => {
    if (name === 'prev') {
      if (slide === 0) {
        return;
      }
      setSlide(prev => prev - 1);
    }
    if (name === 'next') {
      if (slide + 1 === heroSlider.length) {
        return;
      }
      setSlide(prev => prev + 1);
    }
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <h1 className={s.title}>{heroSlider[slide]?.title}</h1>
      </Container>
      <div className={s.wrapSlider}>
        {isDesk && (
          <div className={s.control}>
            <button
              className={s.control__left}
              disabled={slide + 1 === 1}
              onClick={() => handleControl('prev')}
            >
              <img src={icon} alt="icon" height={12} width={12} className={s.control__leftSvg} />
            </button>
            {
              <p className={s.control__title}>
                {slide + 1} /<span className={s.control__span}> {heroSlider.length}</span>
              </p>
            }
            <button
              className={s.control__right}
              disabled={slide + 1 === heroSlider.length}
              onClick={() => handleControl('next')}
            >
              <img src={icon} alt="icon" height={12} width={12} className={s.control__rightSvg} />
            </button>
          </div>
        )}

        <Swiper
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={isDesk ? 32 : 24}
          pagination={{
            clickable: true,
          }}
          className={`mySwiper ${s.swiper}`}
        >
          <div className={s.wrapSlide}>
            {heroSlider.map((el, index) => {
              const title = el.title.length > 50 ? el.title.slice(0, 50) + '...' : el.title;
              const opcity = index !== slide ? '0.7' : '1.0';
              return (
                <SwiperSlide key={el.title} className={s.slide} style={{ opacity: `${opcity}` }}>
                  <div onClick={() => setSlide(index)} className={s.slide__wrap}>
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
      </div>
    </section>
  );
};

export default Hero;
