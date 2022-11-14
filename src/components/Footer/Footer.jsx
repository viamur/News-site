import { footerMenu } from '../../utils/utils';
import Container from '../Container/Container';

// @mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// scss
import icon from '../../images/icon/accordion.svg';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      {/* <Container> */}
      {footerMenu.map(el => {
        return (
          <li key={el.id}>
            {el.submenu ? (
              <Accordion>
                <AccordionSummary expandIcon={<img src={icon} />}>{el.title}</AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {el.submenu.map(item => {
                      return <li key={item.id}>{item.title}</li>;
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ) : (
              <p>{el.title}</p>
            )}
          </li>
        );
      })}
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
