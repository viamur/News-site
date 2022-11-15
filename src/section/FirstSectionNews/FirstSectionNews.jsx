import AllNews from '../../components/AllNews/AllNews';
import ChoiceRedaction from '../../components/ChoiceRedaction/ChoiceRedaction';
import Container from '../../components/Container/Container';
import Regions from '../../components/Regions/Regions';

import s from './FirstSectionNews.module.scss';

const FirstSectionNews = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <AllNews />
        <div className={s.right}>
          <ChoiceRedaction />
          <Regions />
        </div>
      </div>
    </section>
  );
};

export default FirstSectionNews;
