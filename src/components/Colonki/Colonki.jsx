import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { kolonki } from '../../utils/utils';
import s from './Colonki.module.scss';

const Kolonki = () => {
  const [colonki, setColonki] = useState([]);

  useEffect(() => {
    /* Тут можно запрос сделать */

    setColonki(kolonki.slice(0, 4));
  }, []);

  return (
    <section className={s.section}>
      <div className={s.top}>
        <h2 className={s.title}>Колонки</h2>
        <Link className={s.link}>Всі колонки</Link>
      </div>
      <ul className={s.list}>
        {colonki.map(el => {
          return (
            <li key={el.id} className={s.item}>
              <div className={s.block}>
                <img
                  src={el.user.avatarURL}
                  alt={el.user.name}
                  className={s.img}
                  width={64}
                  height={76}
                />
                <div>
                  <p className={s.name}>{el.user.name}</p>
                  <p className={s.position}>{el.user.position}</p>
                </div>
              </div>
              <p className={s.text}>{el.title}</p>
              <p className={s.date}>{el.date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Kolonki;
