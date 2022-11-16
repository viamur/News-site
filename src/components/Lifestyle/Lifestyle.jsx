import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';
import NavNews from '../NavNews/NavNews';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';
import ListNews from '../ListNews/ListNews';
import { lifeStyle } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';

import s from './Lifestyle.module.scss';
import List3News from '../List3News/List3News';

const Lifestyle = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);
  const isDesk = useDeskScreen();

  useEffect(() => {
    if (isDesk) {
      setNews(lifeStyle.slice(0, 7));
      return;
    }
    setNews(lifeStyle.filter(el => el.category === filter).slice(0, 5));
  }, [filter, isDesk]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <TopSectionTitle title={'Лайфстайл'} textLink={'Всі новини розділу'} />
        {!isDesk && <NavNews filter={filter} setFilter={setFilter} />}
        <div className={s.wrapper}>
          {isDesk && <List3News news={news.slice(0, 3)} />}
          <div>
            {isDesk && <h3 className={s.listNewsTitle}>Новини розділу</h3>}
            <ListNews data={isDesk ? news.slice(2, 7) : news} img={!isDesk} />
            <MoreNewsBtn title={'Більше'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
