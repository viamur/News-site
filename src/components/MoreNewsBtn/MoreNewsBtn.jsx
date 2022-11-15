import { Link } from 'react-router-dom';

import sprite from '../../images/icon/sprite.svg';
import s from './MoreNewsBtn.module.scss';

const MoreNewsBtn = ({ title, style }) => {
  return (
    <Link className={s.bottom__link} style={style}>
      {title}
      <span className={s.bottom__span}>
        <svg className={s.bottom__svg} width={16} height={16}>
          <use href={sprite + '#icon-' + 'arrowright'}></use>
        </svg>
      </span>
    </Link>
  );
};

export default MoreNewsBtn;
