import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { kolonki } from '../../utils/utils';
import { getDate } from '../../utils/convertDate';

import '@splidejs/react-splide/css';
import s from './Colonki.module.scss';

const Kolonki = () => {
  const [colonki, setColonki] = useState([]);

  useEffect(() => {
    /* Тут можно запрос сделать */

    setColonki(kolonki.slice(0, 4));
  }, []);

  return (
    <section className={s.section}>
      <div className={s.top}>
        <h2 className={s.title}>Колонки</h2>
        <Link className={s.link}>Всі колонки</Link>
      </div>
      <Splide
        aria-label="Колонки"
        className={s.slider}
        options={{
          rewind: false,
          width: '375px',
          autoWidth: true,
          pagination: false,
          arrows: false,
        }}
      >
        {/* <ul className={s.list}> */}
        {colonki.map(el => {
          const date = getDate(el.date);
          return (
            <SplideSlide key={el.id} className={s.item} tag={'li'}>
              {/* <li key={el.id} className={s.item}> */}
              <div className={s.block}>
                <img
                  src={el.user.avatarURL}
                  alt={el.user.name}
                  className={s.img}
                  width={64}
                  height={76}
                />
                <div>
                  <p className={s.name}>{el.user.name}</p>
                  <p className={s.position}>{el.user.position}</p>
                </div>
              </div>
              <p className={s.text}>{el.title}</p>
              <p className={s.date}>{date}</p>
              {/* </li> */}
            </SplideSlide>
          );
        })}
        {/* </ul> */}
      </Splide>
    </section>
  );
};

export default Kolonki;
