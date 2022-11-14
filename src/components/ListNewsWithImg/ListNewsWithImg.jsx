import { Link } from 'react-router-dom';

import sprite from '../../images/icon/sprite.svg';
import s from './ListNewsWithImg.module.scss';

const ListNewsWithImg = ({ news }) => {
  return (
    <ul className={s.list}>
      {news.map(el => {
        return (
          <li key={el.id} className={s.item}>
            <img src={el.img} alt={el.title} className={s.img} />
            <div className={s.wrap}>
              <p className={s.time}>{el.time}</p>
              {el.accent && (
                <>
                  <svg className={s.accent__svg} width={18} height={20}>
                    <use href={sprite + '#icon-' + el.accent.icon}></use>
                  </svg>
                  <p className={el.accent.accentColor ? s.accent__titleColor : s.accent__title}>
                    {el.accent.title}
                  </p>
                </>
              )}
            </div>
            <h3>
              <Link className={s.news__title}>{el.title}</Link>
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNewsWithImg;
