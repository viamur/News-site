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
  const [lang, setLeng] = useState('ua');

  const handleChange = event => {
    const value = event.target.value;
    setLeng(value);

    /* Тут можно поменять путь или квери параметр добавить к адресной строки
        для изменения языка на странице */
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
              <button type="button" aria-label="search" className={s.search}>
                <svg className={s.svgBtnSearch} width={16} height={16}>
                  <use href={sprite + '#icon-' + 'search'}></use>
                </svg>
              </button>
              <div className={s.formSelect}>
                <select onChange={handleChange} value={lang} className={s.select}>
                  <option value={'ua'}>UA</option>
                  <option value={'ru'}>RU</option>
                </select>
                <svg className={s.svgBtnSelect} width={9} height={5}>
                  <use href={sprite + '#icon-' + 'select'}></use>
                </svg>
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
      </nav>
    </header>
  );
};

export default Header;
