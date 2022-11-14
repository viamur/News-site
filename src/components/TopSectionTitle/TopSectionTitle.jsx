import { Link } from 'react-router-dom';

import s from './TopSectionTitle.module.scss';

const TopSectionTitle = ({ title, textLink, patch }) => {
  return (
    <div className={s.top}>
      <h2 className={s.title}>{title}</h2>
      <Link className={s.link}>{textLink}</Link>
    </div>
  );
};

export default TopSectionTitle;
