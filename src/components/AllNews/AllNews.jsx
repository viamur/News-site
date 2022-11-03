import { Link } from 'react-router-dom';
import Container from '../Container/Container';

import sprite from '../../images/icon/sprite.svg';
import s from './AllNews.module.scss';

const AllNews = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.top}>
          <h2 className={s.top__title}>Всі новини</h2>
          <Link className={s.top__link}>Архiв</Link>
        </div>
        <ul className={s.nav}>
          <li className={s.nav__item}>
            <button type="button" name="all" className={s.nav__btn}>
              Всі
            </button>
          </li>
          <li className={s.nav__item}>
            <button type="button" name="news" className={s.nav__btn}>
              Новини
            </button>
          </li>
          <li className={s.nav__item}>
            <button type="button" name="article" className={s.nav__btn}>
              Статті
            </button>
          </li>
        </ul>
        <ul></ul>
        <button type="button" className={s.btnGet}>
          <svg className={s.btnGet__svg} width={20} height={20}>
            <use href={sprite + '#icon-' + 'refresh'}></use>
          </svg>
          Завантажити ще
        </button>
      </Container>
    </section>
  );
};

export default AllNews;
