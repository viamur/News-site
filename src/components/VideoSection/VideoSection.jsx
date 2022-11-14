import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { videoBlock } from '../../utils/utils';
import { getDate } from '../../utils/convertDate';
import chunk from 'chunk';

import sprite from '../../images/icon/sprite.svg';
import s from './VideoSection.module.scss';

const VideoSection = () => {
  const [news, setNews] = useState([]);
  const [Allnews, setAllNews] = useState([[]]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    /* Подальшому тут можно GET запрос зробити і записати в стейт */
    const data = chunk(videoBlock, 5);
    setAllNews(data);
    setNews(data[0]);
  }, []);

  const handleMoreNews = e => {
    e.preventDefault();
    /* Высыпаем пред массив и высыпаем след стр */
    setNews(prev => [...prev, ...Allnews[page + 1]]);

    /* Увеличиваем страницу +1 */
    setPage(prev => prev + 1);
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.title}>Відео</h2>
          <Link className={s.link}>Більше відео</Link>
        </div>
        <ul className={s.list}>
          {news.map(el => {
            const date = getDate(el.date);
            return (
              <li key={el.id} className={s.item}>
                <div className={s.item__top}>
                  <img src={el.imgURL} alt={el.title} className={s.img} />
                  <svg className={s.svg} width={20} height={20}>
                    <use href={sprite + '#icon-' + 'video'}></use>
                  </svg>
                </div>
                <p className={s.date}>{date}</p>
                <Link className={s.news}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
        {Allnews.length !== page + 1 && (
          <button type="button" className={s.btn} onClick={handleMoreNews}>
            Більше
          </button>
        )}
      </Container>
    </section>
  );
};

export default VideoSection;
