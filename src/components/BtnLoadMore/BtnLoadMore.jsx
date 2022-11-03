import sprite from '../../images/icon/sprite.svg';
import s from './BtnLoadMore.module.scss';

const BtnLoadMore = ({ handleUpdateNews }) => {
  return (
    <button type="button" className={s.btnGet} onClick={handleUpdateNews}>
      <svg className={s.btnGet__svg} width={20} height={20}>
        <use href={sprite + '#icon-' + 'refresh'}></use>
      </svg>
      Завантажити ще
    </button>
  );
};

export default BtnLoadMore;
