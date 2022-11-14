import { useEffect, useRef, useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { regionNews } from '../../utils/utils';
import { getDayAndMonth, getOnlyTime } from '../../utils/convertDate';
import MoreNewsBtn from '../MoreNewsBtn/MoreNewsBtn';

import s from './Regions.module.scss';

const Regions = () => {
  const [filter, setFilter] = useState('Kyiv');
  const [news, setNews] = useState([]);

  useEffect(() => {
    /* Тут может быть гет запрос */
    setNews(regionNews);
  }, []);

  /* ................................................. .................................................
  ..............Делаем скролл элементов с помощью мыши..................
  ............................................................. ................................................. */

  // Берем ссылку на элемент который будет скролить
  const listRef = useRef();
  let isDown = false;
  let scrollX;
  let scrollLeft;

  // Функция при нажатие на тач срабатывает
  const hadleTouchDown = e => {
    isDown = true;
    scrollX = e.changedTouches[0].pageX - listRef.current.offsetLeft;
    scrollLeft = listRef.current.scrollLeft;
  };

  // Функция при нажатие мышки срабатывает
  const handleMouseDown = e => {
    e.preventDefault();
    isDown = true;

    /* 
         e.pageX - положение нашей мышки по оси Х относительно всего документа 
         listRef.current.offsetLeft - смещение относительно родителя в нашем случаи относительно окна браузера
         listRef.current.scrollLeft - устанавливаем количество px на которое контент элемента прокручен влево
    */

    scrollX = e.pageX - listRef.current.offsetLeft;
    scrollLeft = listRef.current.scrollLeft;
  };

  // При покидание нашего листа или при отжатие клавиши выполн функция
  const handleMouseAndTouchUp = e => {
    isDown = false;
  };

  // Для тача но не обязательно
  const hadleTouchMove = e => {
    if (!isDown) return;

    let element = e.changedTouches[0].pageX - listRef.current.offsetLeft - scrollX;
    const scrollLeftForList = scrollLeft - element;

    if (scrollLeftForList < 143) setFilter('Kyiv');
    if (scrollLeftForList > 143 && scrollLeftForList < 435) setFilter('Odessa');
    if (scrollLeftForList > 435) setFilter('Kharkiv');

    listRef.current.scrollLeft = scrollLeftForList;
  };

  // Слушаем движение мышки
  const handleMouseMove = e => {
    // Если небыла нажата мышка а мы перемещаем мышку то дальше функция не пройдет
    if (!isDown) return;
    e.preventDefault();

    let element = e.pageX - listRef.current.offsetLeft - scrollX;
    const scrollLeftForList = scrollLeft - element;

    if (scrollLeftForList < 143) setFilter('Kyiv');
    if (scrollLeftForList > 143 && scrollLeftForList < 435) setFilter('Odessa');
    if (scrollLeftForList > 435) setFilter('Kharkiv');

    listRef.current.scrollLeft = scrollLeftForList;
  };

  // Для скрола, можно на моб обоитись только им
  const handleScroll = e => {
    const scroll = e.target.scrollLeft;

    if (scroll < 143) setFilter('Kyiv');
    if (scroll > 143 && scroll < 435) setFilter('Odessa');
    if (scroll > 435) setFilter('Kharkiv');
  };

  // Хендлер при нажатие на кнопки фильтр
  const handleChangeFilter = e => {
    e.preventDefault();
    const name = e.target.name;
    if (name === 'Odessa') {
      listRef.current.scrollLeft = 328;
    }
    if (name === 'Kharkiv') {
      listRef.current.scrollLeft = 656;
    }
    if (name === 'Kyiv') {
      listRef.current.scrollLeft = 0;
    }
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
      <ul
        className={s.region__list}
        ref={listRef}
        onTouchMove={hadleTouchMove}
        onTouchStart={hadleTouchDown}
        onTouchEnd={handleMouseAndTouchUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseAndTouchUp}
        onMouseLeave={handleMouseAndTouchUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {news.map(card => {
          return (
            <li className={s.region__item} key={card.id}>
              <div>
                <h4 className={s.region__title}>{card.name}</h4>
                {card.news.map(el => {
                  const date = getDayAndMonth(el.date);
                  return (
                    <>
                      <p className={s.card__date} key={el.id}>
                        {date}
                      </p>
                      <ul className={s.list__wrap}>
                        {el.dayNews.map(list => {
                          const time = getOnlyTime(list.time);
                          return (
                            <li className={s.card__item}>
                              <Link className={s.card__link}>
                                <span className={s.card__time}>{time}</span>
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
              <MoreNewsBtn title={'Більше новин'} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Regions;
