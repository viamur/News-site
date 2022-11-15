import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';
import NavNews from '../NavNews/NavNews';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';
import ListNews from '../ListNews/ListNews';
import { lifeStyle } from '../../utils/utils';

import s from './Lifestyle.module.scss';

const Lifestyle = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(lifeStyle.filter(el => el.category === filter).slice(0, 5));
  }, [filter]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <TopSectionTitle title={'Лайфстайл'} textLink={'Всі новини розділу'} />
        <NavNews filter={filter} setFilter={setFilter} />
        <ListNews data={news} />
        <MoreNewsBtn title={'Більше'} />
      </div>
    </section>
  );
};

export default Lifestyle;
