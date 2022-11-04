import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { videoBlock } from '../../utils/utils';

import sprite from '../../images/icon/sprite.svg';
import s from './VideoSection.module.scss';

const VideoSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    /* Подальшому тут можно GET запрос зробити і записати в стейт */
    setNews(videoBlock);
  }, []);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.title}>Відео</h2>
          <Link className={s.link}>Більше відео</Link>
        </div>
        <ul className={s.list}>
          {news.map(el => {
            return (
              <li key={el.id} className={s.item}>
                <div className={s.item__top}>
                  <img src={el.imgURL} alt={el.title} className={s.img} />
                  <svg className={s.svg} width={20} height={20}>
                    <use href={sprite + '#icon-' + 'video'}></use>
                  </svg>
                </div>
                <p className={s.date}>{el.date}</p>
                <Link className={s.news}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className={s.btn}>
          Більше
        </button>
      </Container>
    </section>
  );
};

export default VideoSection;
