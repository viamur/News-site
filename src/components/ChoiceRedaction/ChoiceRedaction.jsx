import Container from '../Container/Container';

import { choiceRedactors } from '../../utils/utils';
import BtnLoadMore from '../BtnLoadMore/BtnLoadMore';
import chunk from 'chunk';

import s from './ChoiceRedaction.module.scss';
import { useEffect, useState } from 'react';
import ListNewsWithImg from '../ListNewsWithImg/ListNewsWithImg';

/* Количество отображаемых новостей */
const quantity = 3;

const ChoiceRedaction = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [chunkData, setChunkData] = useState([[]]);

  useEffect(() => {
    const data = chunk(choiceRedactors, quantity);
    setNews(data[0]);
    setChunkData(data);
  }, []);

  const handleUpdateNews = e => {
    e.preventDefault();
    setNews(prev => [...prev, ...chunkData[page]]);
    setPage(prev => prev + 1);
  };
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Вибір редакції</h2>
        <ListNewsWithImg news={news} />

        {chunkData.length !== page && <BtnLoadMore handleUpdateNews={handleUpdateNews} />}
      </Container>
    </section>
  );
};

export default ChoiceRedaction;
