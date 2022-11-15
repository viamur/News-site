import BetweenSection from '../../components/BetweenSection/BetweenSection';
import Kolonki from '../../components/Colonki/Colonki';
import Economica from '../../components/Economica/Economica';
import Lifestyle from '../../components/Lifestyle/Lifestyle';
import Polituka from '../../components/Polituka/Polituka';
import Promo from '../../components/Promo/Promo';

import s from './SecondSectionNews.module.scss';

const SecondSectionNews = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Kolonki />
        <div>
          <Polituka />
          <Promo />
          <Economica />
          <Lifestyle />
        </div>
      </div>
    </section>
  );
};

export default SecondSectionNews;
