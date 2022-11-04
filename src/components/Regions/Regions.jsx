import { useEffect, useRef, useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { regionNews } from '../../utils/utils';

import sprite from '../../images/icon/sprite.svg';
import s from './Regions.module.scss';

const Regions = () => {
  const [filter, setFilter] = useState('Kyiv');
  const [news, setNews] = useState([]);

  const translate = filter === 'Kyiv' ? 24 : filter === 'Kharkiv' ? -623 : -295;

  useEffect(() => {
    /* Тут может быть гет запрос */
    setNews(regionNews);
  }, []);

  const handleChangeFilter = e => {
    e.preventDefault();
    const name = e.target.name;

    setFilter(name);
  };
  return (
    <section className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.top__title}>Регіони</h2>
          <Link className={s.top__link}>Всі новини розділу</Link>
        </div>
        <ul className={s.list}>
          <li className={s.list__item}>
            <button
              type="button"
              onClick={handleChangeFilter}
              name="Kyiv"
              className={filter === 'Kyiv' ? s.list__btnActive : s.list__btn}
            >
              Київ
            </button>
          </li>
          <li className={s.list__item}>
            <button
              type="button"
              onClick={handleChangeFilter}
              name="Odessa"
              className={filter === 'Odessa' ? s.list__btnActive : s.list__btn}
            >
              Одесса
            </button>
          </li>
          <li className={s.list__item}>
            <button
              type="button"
              onClick={handleChangeFilter}
              name="Kharkiv"
              className={filter === 'Kharkiv' ? s.list__btnActive : s.list__btn}
            >
              Харків
            </button>
          </li>
        </ul>
      </Container>
      <ul className={s.region__list}>
        {news.map(card => {
          return (
            <li className={s.region__item} style={{ transform: `translate(${translate}px)` }}>
              <div>
                <h4 className={s.region__title}>{card.name}</h4>
                {card.news.map(el => {
                  return (
                    <>
                      <p className={s.card__date}>{el.date}</p>
                      <ul className={s.list__wrap}>
                        {el.dayNews.map(list => {
                          return (
                            <li className={s.card__item}>
                              <Link className={s.card__link}>
                                <span className={s.card__time}>{list.time}</span>
                                {list.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </div>
              <Link className={s.bottom__link}>
                Більше новин
                <span className={s.bottom__span}>
                  <svg className={s.bottom__svg} width={16} height={16}>
                    <use href={sprite + '#icon-' + 'arrowright'}></use>
                  </svg>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Regions;
