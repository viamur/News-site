import { Link } from 'react-router-dom';
import { getOnlyTime } from '../../utils/convertDate';

import sprite from '../../images/icon/sprite.svg';
import s from './ListNews.module.scss';

const ListNews = ({ data = [] }) => {
  return (
    <ul>
      {data.map(el => {
        const time = getOnlyTime(el.time);
        return (
          <li key={el.id} className={s.item}>
            {el.accent && (
              <div className={s.accent}>
                <svg className={s.accent__svg} width={16} height={16}>
                  <use href={sprite + '#icon-' + el.accent.icon}></use>
                </svg>
                <p className={el.accent.accentcolor ? s.accent__titleColor : s.accent__title}>
                  {el.accent.title}
                </p>
              </div>
            )}
            <h3 className={el.accentcolor ? s.news__accent : s.news}>
              <Link>
                <span className={s.time}>{time}</span>
                {el.title}
              </Link>
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNews;
