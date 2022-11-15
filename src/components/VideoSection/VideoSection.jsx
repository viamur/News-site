import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { videoBlock } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import { getDate } from '../../utils/convertDate';
import chunk from 'chunk';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';

import sprite from '../../images/icon/sprite.svg';
import s from './VideoSection.module.scss';

const VideoSection = () => {
  const [news, setNews] = useState([]);
  const [Allnews, setAllNews] = useState([[]]);
  const [page, setPage] = useState(0);

  const isDesk = useDeskScreen();

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

  const style = isDesk
    ? {
        background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(24, 40, 64, 0.95) 100%), url(${news[0]?.imgURL})`,
        backgroundSize: 'cover',
      }
    : null;

  return (
    <section className={s.section} style={style}>
      <Container>
        <div className={s.top}>
          <h2 className={s.title}>Відео</h2>
          {isDesk ? (
            <MoreNewsBtn
              title={'Більше новин'}
              style={{ color: 'white', fill: 'white', marginTop: '0px' }}
            />
          ) : (
            <Link className={s.link}>Більше відео</Link>
          )}
        </div>
        <ul className={s.list}>
          {news.map((el, index) => {
            const title = el.title.length > 62 ? el.title.slice(0, 62) + '...' : el.title;
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
                <Link className={s.news}>
                  {isDesk ? (index === 0 ? el.title : title) : el.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {Allnews.length !== page + 1 && !isDesk && (
          <button type="button" className={s.btn} onClick={handleMoreNews}>
            Більше
          </button>
        )}
      </Container>
    </section>
  );
};

export default VideoSection;
