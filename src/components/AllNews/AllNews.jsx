import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import BtnLoadMore from '../BtnLoadMore/BtnLoadMore';
import { allNews } from '../../utils/utils';
import chunk from 'chunk';

import s from './AllNews.module.scss';
import ListNews from '../ListNews/ListNews';

/* Количество отображаемых новостей */
const quantity = 10;

const AllNews = () => {
  const [filter, setFilter] = useState('all');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [chunkData, setChunkData] = useState([[]]);

  useEffect(() => {
    const data = chunk(allNews, quantity);
    setNews(data[0]);
    setChunkData(data);
  }, []);

  const handleChangeFilter = e => {
    e.preventDefault();
    const name = e.target.name;
    let data;
    if (name === 'all') {
      data = chunk(allNews, quantity);
    }
    if (name !== 'all') {
      const filterData = allNews.filter(el => el.category === name);
      data = chunk(filterData, quantity);
    }
    setNews(data[0]);
    setChunkData(data);
    setPage(1);
    setFilter(name);
  };

  const handleUpdateNews = e => {
    e.preventDefault();
    setNews(prev => [...prev, ...chunkData[page]]);
    setPage(prev => prev + 1);
  };
  return (
    <section id="news" className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.top__title}>Всі новини</h2>
          <Link className={s.top__link}>Архiв</Link>
        </div>
        <ul className={s.nav}>
          <li className={s.nav__item}>
            <button
              type="button"
              name="all"
              onClick={handleChangeFilter}
              className={filter === 'all' ? s.nav__btnActive : s.nav__btn}
            >
              Всі
            </button>
          </li>
          <li className={s.nav__item}>
            <button
              type="button"
              name="news"
              onClick={handleChangeFilter}
              className={filter === 'news' ? s.nav__btnActive : s.nav__btn}
            >
              Новини
            </button>
          </li>
          <li className={s.nav__item}>
            <button
              type="button"
              name="articles"
              onClick={handleChangeFilter}
              className={filter === 'articles' ? s.nav__btnActive : s.nav__btn}
            >
              Статті
            </button>
          </li>
        </ul>
        <ListNews data={news} />
        {chunkData.length !== page && <BtnLoadMore handleUpdateNews={handleUpdateNews} />}
      </Container>
    </section>
  );
};

export default AllNews;
