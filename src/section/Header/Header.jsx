import { useState } from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from '../../components/Container/Container';
import { menu, region, headerSoc } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';

// Import Swiper s tyles
import 'swiper/css';
import './styleForSwiper.css';
// scss
import sprite from '../../images/icon/sprite.svg';
import s from './Header.module.scss';

const Header = () => {
  const [lang, setLeng] = useState('UA');
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [search, setSearch] = useState('');

  const isDesk = useDeskScreen();

  const handleChangeLang = e => {
    e.preventDefault();
    const name = e.target.name;
    setLeng(name);
    setIsOpenSelector(prev => !prev);

    /* Тут можно поменять путь или квери параметр добавить к адресной строки
        для изменения языка на странице */
  };

  const hadleSearch = e => {
    e.preventDefault();

    if (isOpenSearch) {
      // тут поиск делаем
      setSearch('');
    }

    setIsOpenSearch(prev => !prev);
  };

  return (
    <header className={s.header}>
      <div className={s.top}>
        <Container>
          <div className={s.top__wrap}>
            <div className={s.top__left}>
              <button type="button" aria-label="menu" className={s.menuBtn}>
                <svg className={s.svgBtnMenu} width={15} height={8}>
                  {/* eslint-disable-next-line */}
                  <use href={sprite + '#icon-' + 'burger'}></use>
                </svg>
                Меню
              </button>
              {isDesk && (
                <ul className={s.region}>
                  {region.map(el => {
                    return (
                      <li key={el.name} className={s.region__item}>
                        <Link to={'suspilstvo'} className={s.region__link}>
                          {el.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className={s.top__right}>
              {/* Поисковый блок */}
              <div className={s.search__block}>
                {(isOpenSearch || isDesk) && (
                  <input
                    type="text"
                    value={search}
                    placeholder={'пошук новин'}
                    onChange={e => setSearch(e.target.value)}
                    className={s.search__input}
                  />
                )}
                <button
                  type="button"
                  aria-label="search"
                  className={s.search}
                  onClick={hadleSearch}
                >
                  <svg className={s.svgBtnSearch} width={16} height={16}>
                    {/* eslint-disable-next-line */}
                    <use href={sprite + '#icon-' + 'search'}></use>
                  </svg>
                </button>
              </div>
              {/* Cоцсети в хедере только на десктопе */}
              {isDesk && (
                <ul className={s.soc}>
                  {headerSoc.map(el => {
                    return (
                      <li key={el.id + el.title} className={s.soc__item}>
                        <a href={el.link}>
                          <img src={el.icon} alt={el.title} height={22} width={22} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
              {/* Блок с выбором языка сайта */}
              <div className={s.langBlock}>
                <button
                  type="button"
                  name={lang === 'UA' ? 'UA' : 'EN'}
                  onClick={handleChangeLang}
                  className={s.langBlock__selectA}
                >
                  {lang === 'UA' ? 'UA' : 'EN'}
                  {!isDesk && (
                    <svg className={s.langBlock__svg} width={10} height={6}>
                      {/* eslint-disable-next-line */}
                      <use href={sprite + '#icon-' + 'select'}></use>
                    </svg>
                  )}
                </button>
                {(isOpenSelector || isDesk) && (
                  <button
                    className={s.langBlock__selectB}
                    name={lang !== 'UA' ? 'UA' : 'EN'}
                    type="button"
                    onClick={handleChangeLang}
                  >
                    {lang !== 'UA' ? 'UA' : 'EN'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className={s.nav}>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          className={`mySwiper ${s.swiper}`}
        >
          <div className={s.wrapSlide}>
            {menu.map(el => {
              return (
                <SwiperSlide key={el.name} className={s.swiperSlide}>
                  <Link
                    className={el.accent ? s.nav__linkAccent : s.nav__link}
                    to={el.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {el.accent && (
                      <svg className={s.accentSvg} width={20} height={20}>
                        <use href={sprite + '#icon-' + el.icon}></use>
                      </svg>
                    )}
                    {el.name}
                  </Link>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        {isDesk && (
          <Link className={s.live} to="poglyd">
            <span className={s.live__spanA}>
              <span className={s.live__spanB}></span>
            </span>
            live
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
