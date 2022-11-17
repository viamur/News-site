import { useEffect, useState } from 'react';
import chunk from 'chunk';

import { choiceRedactors } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import BtnLoadMore from '../BtnLoadMore/BtnLoadMore';
import ListNewsWithImg from '../ListNewsWithImg/ListNewsWithImg';

import s from './ChoiceRedaction.module.scss';

/* Количество отображаемых новостей */
const quantity = 3;

const ChoiceRedaction = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [chunkData, setChunkData] = useState([[]]);

  const isDesk = useDeskScreen();

  useEffect(() => {
    if (isDesk) {
      const data = chunk(choiceRedactors, 6);
      setNews(data[0]);
      return;
    }
    const data = chunk(choiceRedactors, quantity);
    setNews(data[0]);
    setChunkData(data);
  }, [isDesk]);

  const handleUpdateNews = e => {
    e.preventDefault();
    setNews(prev => [...prev, ...chunkData[page]]);
    setPage(prev => prev + 1);
  };
  return (
    <div className={s.section} id="svit">
      <h2 className={s.title}>Вибір редакції</h2>
      <ListNewsWithImg news={news} />

      {chunkData.length !== page && !isDesk && <BtnLoadMore handleUpdateNews={handleUpdateNews} />}
    </div>
  );
};

export default ChoiceRedaction;
