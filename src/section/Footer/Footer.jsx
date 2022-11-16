import { Link } from 'react-router-dom';
import { footerMenu, footerNewsCompanyMenu, socList } from '../../utils/utils';
import { useDeskScreen } from '../../utils/useMediaQuery';
import Container from '../../components/Container/Container';

// @mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// scss
import icon from '../../images/icon/accordion.svg';
import s from './Footer.module.scss';

const Footer = () => {
  const isDesk = useDeskScreen();

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapTop}>
          <ul className={s.list}>
            {footerMenu.map(el => {
              return (
                <li key={el.id} className={s.item}>
                  {el.submenu && !isDesk ? (
                    <Accordion className={s.accordion}>
                      <AccordionSummary
                        className={s.accordion__summary}
                        expandIcon={<img src={icon} alt={'icon'} height={16} width={16} />}
                      >
                        {el.title}
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className={s.submenu}>
                          {el.submenu.map(item => {
                            return (
                              <li key={item.id} className={s.submenu__item}>
                                <Link className={s.submenu__link}>{item.title} </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <>
                      <Link className={s.item__title}>{el.title}</Link>
                      {el.submenu && isDesk && (
                        <ul className={s.submenu}>
                          {el.submenu.map(item => {
                            return (
                              <li key={item.id} className={s.submenu__item}>
                                <Link className={s.submenu__link}>{item.title} </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <ul className={s.secondMenu}>
            {footerNewsCompanyMenu.map(el => {
              return (
                <li key={el.id} className={s.secondMenu__item}>
                  <Link className={s.secondMenu__link}>{el.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.soc}>
          <h4 className={s.soc__title}>Новини у зручному форматі</h4>
          <ul className={s.soc__list}>
            {socList.map(el => {
              return (
                <li key={el.id} className={s.soc__item}>
                  <a href={el.link} className={s.soc__link}>
                    <img
                      src={el.icon}
                      alt={el.title}
                      className={s.soc__img}
                      height={22}
                      width={22}
                    />
                    <p className={s.soc__text}>{el.title}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className={s.bottom}>
        <h5 className={s.bottom__title}>© 2020-2022, ТОВ «Медіа Мережі»</h5>
        <ul className={s.bottom__list}>
          <li className={s.bottom__item}>
            <a href="/" className={s.bottom__link}>
              Політика користувача
            </a>
          </li>
          <li className={s.bottom__item}>
            <a href="/" className={s.bottom__link}>
              Політика конфіденційності
            </a>
          </li>
          <li className={s.bottom__item}>
            <a href="/" className={s.bottom__link}>
              Політика Cookie-файлів
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
