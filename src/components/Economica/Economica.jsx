import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { ecomica } from '../../utils/utils';
import TopSectionTitle from '../TopSectionTitle/TopSectionTitle';
import NavNews from '../NavNews/NavNews';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';
import ListNewsWithImg from '../ListNewsWithImg/ListNewsWithImg';
import s from './Economica.module.scss';

const Economica = () => {
  const [filter, setFilter] = useState('news'); // news, articles
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(ecomica.filter(el => el.category === filter).slice(0, 3));
  }, [filter]);

  return (
    <section className={s.section}>
      <Container>
        <TopSectionTitle title={'Економіка'} textLink={'Всі новини розділу'} />
        <NavNews filter={filter} setFilter={setFilter} marginBottom={'32px'} />
        <ListNewsWithImg news={news} />
        <MoreNewsBtn title={'Більше'} />
      </Container>
    </section>
  );
};

export default Economica;
