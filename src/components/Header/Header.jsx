import { useState } from 'react';
import { Link } from 'react-scroll';

import Container from '../Container/Container';
import { menu } from '../../utils/utils';
import sprite from '../../images/icon/sprite.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './styleForSwiper.css';
import s from './Header.module.scss';

const Header = () => {
  const [lang, setLeng] = useState('UA');
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [search, setSearch] = useState('');

  const handleChangeLang = e => {
    e.preventDefault();

    const name = e.target.name;
    setLeng(name);

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
            <button type="button" aria-label="menu" className={s.menuBtn}>
              <svg className={s.svgBtnMenu} width={15} height={8}>
                <use href={sprite + '#icon-' + 'burger'}></use>
              </svg>
              Меню
            </button>
            <div className={s.top__right}>
              {isOpenSearch && (
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={s.search__input}
                />
              )}
              <button type="button" aria-label="search" className={s.search} onClick={hadleSearch}>
                <svg className={s.svgBtnSearch} width={16} height={16}>
                  <use href={sprite + '#icon-' + 'search'}></use>
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setIsOpenSelector(prev => !prev)}
                className={s.select}
              >
                {lang}
                <svg className={s.select__svg} width={10} height={6}>
                  <use href={sprite + '#icon-' + 'select'}></use>
                </svg>
                {isOpenSelector && (
                  <ul className={s.selector__list}>
                    <li className={s.selector__item}>
                      <button
                        className={s.selector__btn}
                        name={lang === 'UA' ? 'UA' : 'EN'}
                        type="button"
                        onClick={handleChangeLang}
                      >
                        {lang === 'UA' ? 'UA' : 'EN'}
                      </button>
                    </li>
                    <li className={s.selector__item}>
                      <button
                        className={s.selector__btn}
                        name={lang !== 'UA' ? 'UA' : 'EN'}
                        type="button"
                        onClick={handleChangeLang}
                      >
                        {lang !== 'UA' ? 'UA' : 'EN'}
                      </button>
                    </li>
                  </ul>
                )}
              </button>
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
      </nav>
    </header>
  );
};

export default Header;
