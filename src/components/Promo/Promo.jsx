import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Container from '../Container/Container';
import { promoSlider } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import { getDate } from '../../utils/convertDate';

import '@splidejs/react-splide/css';
import './splide.scss';
import sprite from '../../images/icon/sprite.svg';
import s from './Promo.module.scss';

const Promo = () => {
  const [news, setNews] = useState([]);
  const [active, setActive] = useState(0);
  const isDesk = useDeskScreen();

  useEffect(() => {
    setNews(promoSlider);
  }, []);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.top}>
          <h2 className={s.title}>Промо</h2>
          <Link className={s.link}>Всі матеріали</Link>
        </div>
        {news[active] && (
          <div className={s.card}>
            <img
              src={news[active].imgURL}
              alt={news[active].title}
              height={184}
              width={328}
              className={s.img}
            />
            <div className={s.card__bottom}>
              <div className={s.wrapDate}>
                <p className={s.date}>{getDate(news[active].date)}</p>
                {news[active].accent && (
                  <div className={s.accent}>
                    <svg className={s.accent__svg} width={16} height={16}>
                      <use href={sprite + '#icon-' + news[active].accent.icon}></use>
                    </svg>
                    <p className={s.accent__title}>{news[active].accent.title}</p>
                  </div>
                )}
              </div>
              <h3 className={s.card__title}>
                <Link to={news[active].path}>{news[active].title}</Link>
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <Splide
          onMoved={(slide, index) => setActive(index)}
          aria-label="Promo"
          className={s.slider}
          options={{
            rewind: false,
            width: isDesk ? '90%' : '375px',
            gap: isDesk ? '32px' : '24px',
            autoWidth: true,
            pagination: false,
            arrows: isDesk ? true : false,
          }}
        >
          {news.map((el, index) => {
            const date = getDate(el.date);
            return (
              <SplideSlide
                key={el.id}
                className={s.item}
                tag={'li'}
                onClick={() => setActive(index)}
              >
                <p className={s.item__date}>{date}</p>
                <h4 className={s.item__title}>{el.title}</h4>
              </SplideSlide>
            );
          })}
        </Splide>
        {false && (
          <div class="splide__arrows splide__arrows--ltr">
            <button
              type="button"
              className="splide__arrow splide__arrow--next"
              aria-label="Next slide"
              aria-controls="default-track"
            >
              next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promo;

//  {
//     id: 1,
//     title: 'Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів',
//     imgURL: imgPromoDemo,
//     path: '/',
//     date: '05 серпня 11:00',
//   },
