import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { choiceRedactors } from '../../utils/utils';
import BtnLoadMore from '../BtnLoadMore/BtnLoadMore';
import chunk from 'chunk';

import sprite from '../../images/icon/sprite.svg';
import s from './ChoiceRedaction.module.scss';
import { useEffect, useState } from 'react';

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
        <ul className={s.list}>
          {news.map(el => {
            return (
              <li key={el.id} className={s.item}>
                <img src={el.img} alt={el.path} className={s.img} />
                <div className={s.wrap}>
                  <p>{el.time}</p>
                  {el.accent && (
                    <>
                      <svg className={s.accent__svg} width={16} height={16}>
                        <use href={sprite + '#icon-' + el.accent.icon}></use>
                      </svg>
                      <p>{el.accent.title}</p>
                    </>
                  )}
                </div>
                <Link>{el.title}</Link>
              </li>
            );
          })}
        </ul>
        {chunkData.length !== page && <BtnLoadMore handleUpdateNews={handleUpdateNews} />}
      </Container>
    </section>
  );
};

export default ChoiceRedaction;
