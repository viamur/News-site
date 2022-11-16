import { useEffect, useState } from 'react';

import Container from '../Container/Container';
import { politika } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import ListNews from '../ListNews/ListNews';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';

import s from './Polituka.module.scss';

import NavNews from '../NavNews/NavNews';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';
import List3News from '../List3News/List3News';

const Polituka = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);
  const isDesk = useDeskScreen();

  useEffect(() => {
    if (isDesk) {
      setNews(politika.slice(0, 7));
      return;
    }
    setNews(politika.filter(el => el.category === filter).slice(0, 6));
  }, [filter, isDesk]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <TopSectionTitle title={'Політика'} textLink={'Всі новини розділу'} />
        {!isDesk && <NavNews filter={filter} setFilter={setFilter} />}
        <div className={s.wrapper}>
          {isDesk && <List3News news={news.slice(0, 3)} />}
          <div>
            {isDesk && <h3 className={s.listNewsTitle}>Новини розділу</h3>}
            <ListNews data={isDesk ? news.slice(2, 7) : news} />
            <MoreNewsBtn title={'Більше'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Polituka;
