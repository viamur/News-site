import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { politika } from '../../utils/utils';
import ListNews from '../ListNews/ListNews';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';

import s from './Polituka.module.scss';

const Polituka = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(politika.filter(el => el.category === filter).slice(0, 6));
  }, [filter]);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.title}>Політика</h2>
          <Link className={s.link}>Всі новини розділу</Link>
        </div>
        <ul className={s.list}>
          <li className={s.list__item}>
            <button
              type="button"
              onClick={() => setFilter('news')}
              name="news"
              className={filter === 'news' ? s.list__btnActive : s.list__btn}
            >
              Новини
            </button>
          </li>
          <li className={s.list__item}>
            <button
              type="button"
              onClick={() => setFilter('articles')}
              name="articles"
              className={filter === 'articles' ? s.list__btnActive : s.list__btn}
            >
              Статті
            </button>
          </li>
        </ul>
        <ListNews data={news} />
        <MoreNewsBtn title={'Більше'} />
      </Container>
    </section>
  );
};

export default Polituka;
