import { useEffect, useState } from 'react';
import { ecomica } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';
import NavNews from '../NavNews/NavNews';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';
import ListNewsWithImg from '../ListNewsWithImg/ListNewsWithImg';
import s from './Economica.module.scss';
import ListNews from '../ListNews/ListNews';
import List3News from '../List3News/List3News';

const Economica = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);
  const isDesk = useDeskScreen();

  useEffect(() => {
    if (isDesk) {
      setNews(ecomica.slice(0, 7));
      return;
    }
    setNews(ecomica.filter(el => el.category === filter).slice(0, 3));
  }, [filter, isDesk]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <TopSectionTitle title={'Економіка'} textLink={'Всі новини розділу'} />
        {!isDesk && <NavNews filter={filter} setFilter={setFilter} />}
        <div className={s.wrapper}>
          {isDesk && <List3News news={news.slice(0, 3)} />}
          <div>
            {isDesk ? (
              <>
                <h3 className={s.listNewsTitle}>Новини розділу</h3>
                <ListNews data={isDesk ? news.slice(2, 7) : news} />
              </>
            ) : (
              <ListNewsWithImg news={news} />
            )}
            <MoreNewsBtn title={'Більше'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economica;
