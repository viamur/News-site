import s from './NavNews.module.scss';

const NavNews = ({ setFilter, filter, marginBottom }) => {
  return (
    <ul className={s.list} style={{ marginBottom: marginBottom }}>
      <li className={s.list__item}>
        <button
          type="button"
          onClick={() => setFilter('news')}
          name="news"
          className={filter === 'news' ? s.list__btnActive : s.list__btn}
        >
          Новини
        </button>
      </li>
      <li className={s.list__item}>
        <button
          type="button"
          onClick={() => setFilter('articles')}
          name="articles"
          className={filter === 'articles' ? s.list__btnActive : s.list__btn}
        >
          Статті
        </button>
      </li>
    </ul>
  );
};

export default NavNews;
