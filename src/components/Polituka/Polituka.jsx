import { useEffect, useState } from 'react';

import Container from '../Container/Container';
import { politika } from '../../utils/utils';
import ListNews from '../ListNews/ListNews';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';

import s from './Polituka.module.scss';
import NavNews from '../NavNews/NavNews';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';

const Polituka = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(politika.filter(el => el.category === filter).slice(0, 6));
  }, [filter]);

  return (
    <section className={s.section}>
      <TopSectionTitle title={'Політика'} textLink={'Всі новини розділу'} />
      <NavNews filter={filter} setFilter={setFilter} />
      <ListNews data={news} />
      <MoreNewsBtn title={'Більше'} />
    </section>
  );
};

export default Polituka;
