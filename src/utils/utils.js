import imgHero0 from '../images/hero/0.jpg';
import imgHero1 from '../images/hero/1.png';
import imgHero2 from '../images/hero/2.png';
import imgHero3 from '../images/hero/3.png';

import choiceRedactors1 from '../images/news/all.png';
import choiceRedactors2 from '../images/news/borch.png';

import imgVideo1 from '../images/video/1.png';
import imgVideo2 from '../images/video/2.png';
import imgVideo3 from '../images/video/3.png';
import imgVideo4 from '../images/video/4.png';
import imgVideo5 from '../images/video/5.png';

import imgColonki1 from '../images/colonki/Avatar1.png';
import imgColonki2 from '../images/colonki/Avatar2.png';
import imgColonki3 from '../images/colonki/Avatar3.png';
import imgColonki4 from '../images/colonki/Avatar4.png';

import imgPromoDemo from '../images/promo/demo.png';

import imgLifeStyle1 from '../images/lifestyle/1.png';
import imgLifeStyle2 from '../images/lifestyle/2.png';
import imgLifeStyle3 from '../images/lifestyle/3.png';
import imgLifeStyle4 from '../images/lifestyle/4.png';

import iconSocGoogleNews from '../images/icon/soc/goggleNews.svg';
import iconSocFB from '../images/icon/soc/fb.svg';
import iconSocInstagram from '../images/icon/soc/inst.svg';
import iconSocTelegram from '../images/icon/soc/teleg.svg';
import iconSocTikTok from '../images/icon/soc/tiktok.svg';
import iconSocYouTube from '../images/icon/soc/youtube.svg';

import iconHeaderSocFB from '../images/icon/header/fb.svg';
import iconHeaderSocInstagram from '../images/icon/header/instagram.svg';
import iconHeaderSocTelegram from '../images/icon/header/telegram.svg';
import iconHeaderSocYouTube from '../images/icon/header/youtube.svg';

/* Верхний перечень городов */
export const region = [
  {
    id: 1,
    name: 'Київ',
    path: '/',
  },
  {
    id: 2,
    name: 'Одеса',
    path: '/',
  },
  {
    id: 3,
    name: 'Харків',
    path: '/',
  },
];

/* Хедер соцсети */
export const headerSoc = [
  {
    id: 1,
    title: 'Telegram',
    link: 'https://www.youtube.com/',
    icon: iconHeaderSocTelegram,
  },
  {
    id: 2,
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: iconHeaderSocFB,
  },
  {
    id: 3,
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: iconHeaderSocInstagram,
  },
  {
    id: 4,
    title: 'YouTube',
    link: 'https://www.youtube.com/',
    icon: iconHeaderSocYouTube,
  },
];

/* Категории */
export const menu = [
  {
    id: 1,
    name: 'Війна',
    accent: true,
    icon: 'fire',
    path: 'war',
  },
  {
    id: 2,
    name: 'Новини',
    accent: false,
    icon: null,
    path: 'news',
  },
  {
    id: 3,
    name: 'Політика',
    accent: false,
    icon: null,
    path: 'politika',
  },
  {
    id: 4,
    name: 'Економіка',
    accent: false,
    icon: null,
    path: 'economica',
  },
  {
    id: 5,
    name: 'Суспільство',
    accent: false,
    icon: null,
    path: 'suspilstvo',
  },
  {
    id: 6,
    name: 'Погляди',
    accent: false,
    icon: null,
    path: 'poglyd',
  },
  {
    id: 7,
    name: 'Світ',
    accent: false,
    icon: null,
    path: 'svit',
  },
];

/* Информация о войне */
export const infoWar = {
  day: 131,
  info: [
    {
      id: 1,
      title: 'особовий склад',
      amount: '~36 200',
      icon: 'soldiers',
    },
    {
      id: 2,
      title: 'танки ',
      amount: '1 589',
      icon: 'tank',
    },
    {
      id: 3,
      title: 'артсистеми',
      amount: '4578',
      icon: 'artillery',
    },
    {
      id: 4,
      title: 'літаки',
      amount: '220',
      icon: 'airplane',
    },
    {
      id: 5,
      title: 'РСЗВ',
      amount: '246',
      icon: 'rocket',
    },
    {
      id: 6,
      title: 'гелікоптери',
      amount: '190',
      icon: 'helicopter',
    },
    {
      id: 7,
      title: 'ББМ',
      amount: '4578',
      icon: 'bmp',
    },
  ],
};

/* Hero слайдер */
export const heroSlider = [
  {
    id: 1,
    title:
      'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
    img: imgHero0,
  },
  {
    id: 2,
    title: 'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження',
    img: imgHero1,
  },
  {
    id: 3,
    title: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини',
    img: imgHero2,
  },
  {
    id: 4,
    title: 'Сейм Латвії визнав рф країною-спонсором тероризму',
    img: imgHero3,
  },
];

/* Всі новини PATH нужен? */
export const allNews = [
  {
    id: 1,
    title:
      'Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: {
      title: 'Новина з фото',
      icon: 'camera',
      accentcolor: false,
    },
  },
  {
    id: 2,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: true,
    category: 'news',
    accent: null,
  },
  {
    id: 3,
    title: 'Прем`єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: null,
  },
  {
    id: 4,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: {
      title: 'Термінова новина',
      icon: 'firenews',
      accentcolor: true,
    },
  },
  {
    id: 5,
    title: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: null,
  },
  {
    id: 6,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: null,
  },
  {
    id: 7,
    title:
      'Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 8,
    title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 9,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 10,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: null,
  },
  {
    id: 11,
    title:
      'Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'articles',
    accent: null,
  },
  {
    id: 12,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: true,
    category: 'articles',
    accent: null,
  },
  {
    id: 13,
    title: 'Прем`єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 14,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: {
      title: 'Термінова новина',
      icon: 'firenews',
      accentcolor: true,
    },
  },
  {
    id: 15,
    title: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 16,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 17,
    title:
      'Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 18,
    title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 19,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
  {
    id: 20,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    accentcolor: false,
    category: 'news',
    accent: null,
  },
];

/* Вибір редакції */
export const choiceRedactors = [
  {
    id: 1,
    title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
    img: choiceRedactors1,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: null,
  },
  {
    id: 2,
    title: 'Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.',
    img: choiceRedactors2,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: {
      title: 'Ексклюзив',
      icon: 'excluziv',
      accentColor: true,
    },
  },
  {
    id: 3,
    title: 'Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.',
    img: choiceRedactors1,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: null,
  },
  {
    id: 4,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    img: choiceRedactors1,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: null,
  },
  {
    id: 5,
    title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.',
    img: choiceRedactors1,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: null,
  },
  {
    id: 6,
    title: 'Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.',
    img: choiceRedactors2,
    time: '2022/08/05 14:59:00',
    path: '/',
    accent: {
      title: 'Ексклюзив',
      icon: 'excluziv',
      accentColor: true,
    },
  },
];

/* Регіони */
export const regionNews = [
  {
    id: 1,
    name: 'Київ',
    path: '/',
    news: [
      {
        id: 1,
        date: '2022/08/05 14:59:00',
        dayNews: [
          {
            id: 1,
            time: '2022/08/05 14:59:00',
            title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
          },
          {
            id: 2,
            time: '2022/08/05 14:59:00',
            title:
              'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети',
          },
        ],
      },
      {
        id: 2,
        date: '2022/08/04 14:59:00',
        dayNews: [
          {
            id: 1,
            time: '2022/08/05 14:59:00',
            title: 'КМДА контролюватиме якість підготовки до опалювального сезону',
          },
          {
            id: 2,
            time: '2022/08/05 14:59:00',
            title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
          },
          {
            id: 3,
            time: '2022/08/05 14:59:00',
            title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Одеса',
    path: '/',
    news: [
      {
        id: 1,
        date: '2022/08/05 14:59:00',
        dayNews: [
          {
            id: 1,
            time: '2022/08/05 14:59:00',
            title:
              'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень',
          },
          {
            id: 2,
            time: '2022/08/05 14:59:00',
            title: 'На Одещині рибалки незаконно наловили раків на 8 млн гривень',
          },
          {
            id: 3,
            time: '2022/08/05 14:59:00',
            title: 'Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому',
          },
          {
            id: 4,
            time: '2022/08/05 14:59:00',
            title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
          },
          {
            id: 5,
            time: '2022/08/05 14:59:00',
            title:
              'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Харків',
    path: '/',
    news: [
      {
        id: 1,
        date: '2022/08/05 14:59:00',
        dayNews: [
          {
            id: 1,
            time: '2022/08/05 14:59:00',
            title:
              'Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено',
          },
          {
            id: 2,
            time: '2022/08/05 14:59:00',
            title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
          },
          {
            id: 3,
            time: '2022/08/05 14:59:00',
            title:
              'Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено',
          },
          {
            id: 4,
            time: '2022/08/05 14:59:00',
            title: 'ЗСУ пересунули лінію фронту на Харківщині: окупанти тікали, кидаючи техніку',
          },
          {
            id: 5,
            time: '2022/08/05 14:59:00',
            title: 'На Харківщині, попри щоденні обстріли, тривають жнива: скільки врожаю зібрали',
          },
        ],
      },
    ],
  },
];

/* Відео блок новин */
export const videoBlock = [
  {
    id: 1,
    title: 'Це не Джошуа": Усик розповів, кого вважає своїм головним суперником',
    path: '',
    imgURL: imgVideo1,
    date: '2022/08/05 14:59:00',
  },
  {
    id: 2,
    title:
      'Ватажок "ДНР" підтвердив підготовку самосуду над полоненими українськими військовими. Відео',
    path: '',
    imgURL: imgVideo2,
    date: '2022/08/05 14:59:00',
  },
  {
    id: 3,
    title:
      '"Спекотні літні канікули": Міноборони України попередило росіян про наслідки відвідування Криму (відео)',
    path: '',
    imgURL: imgVideo3,
    date: '2022/08/05 14:59:00',
  },
  {
    id: 4,
    title: 'Під москвою палала військова частина, де проходять службу строковики (відео)',
    path: '',
    imgURL: imgVideo4,
    date: '2022/08/05 14:59:00',
  },
  {
    id: 5,
    title: 'СБУ затримала в Києві "військового експерта", який працював на росію (фото)',
    path: '',
    imgURL: imgVideo5,
    date: '2022/08/05 14:59:00',
  },
  {
    id: 6,
    title: 'Це не Джошуа": Усик розповів, кого вважає своїм головним суперником',
    path: '',
    imgURL: imgVideo1,
    date: '2022/08/05 14:59:00',
  },
];

/* Колонки */
export const kolonki = [
  {
    id: 1,
    title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Юлія Стахівська',
      avatarURL: imgColonki1,
      position: 'письменниця',
    },
  },
  {
    id: 2,
    title: 'Штайнмаєр - людина-формула',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Юрій Андрухович',
      avatarURL: imgColonki2,
      position: 'письменник',
    },
  },
  {
    id: 3,
    title: 'Щоденник війни. П`ятий тиждень довгого лютого',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Анна Прокопенко',
      avatarURL: imgColonki3,
      position: 'журналістка',
    },
  },
  {
    id: 4,
    title: 'Не пощастило з географією. Небезпечний сусід',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Ірена Карпа',
      avatarURL: imgColonki4,
      position: 'журналістка',
    },
  },
  {
    id: 5,
    title: 'Щоденник війни. П`ятий тиждень довгого лютого',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Анна Прокопенко',
      avatarURL: imgColonki3,
      position: 'журналістка',
    },
  },
  {
    id: 6,
    title: 'Не пощастило з географією. Небезпечний сусід',
    date: '2022/08/14 15:15:00',
    user: {
      name: 'Ірена Карпа',
      avatarURL: imgColonki4,
      position: 'журналістка',
    },
  },
];

/* Политика */
export const politika = [
  {
    id: 1,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    time: '2022/08/05 14:58:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 2,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    time: '2022/08/05 14:58:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 3,
    title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
    time: '2022/08/05 14:58:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 4,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:59:00',
    category: 'news',
    accentcolor: true,
    accent: {
      title: 'Термінова новина',
      icon: 'fire',
      accentcolor: true,
    },
    imgURL: '',
    path: '/',
  },
  {
    id: 5,
    title: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
    time: '2022/08/05 14:59:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 6,
    title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
    time: '2022/08/05 14:58:00',
    category: 'articles',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: {
      title: 'Новина з відео',
      icon: 'video',
      accentcolor: false,
    },
  },
  {
    id: 7,
    title:
      '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    time: '2022/08/05 14:58:00',
    category: 'articles',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },

  {
    id: 8,
    title:
      '"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:58:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 9,
    title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
    time: '2022/08/05 14:59:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
  {
    id: 10,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    category: 'news',
    accentcolor: false,
    imgURL: '',
    path: '/',
    accent: null,
  },
];

/* Промо слайдер */
export const promoSlider = [
  {
    id: 1,
    title: 'Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів',
    imgURL: imgPromoDemo,
    path: '/',
    date: '2022/08/05 11:00:00',
    accent: {
      title: 'Промо',
      icon: 'megaphone',
    },
  },
  {
    id: 2,
    title: 'Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки',
    imgURL: imgPromoDemo,
    path: '/',
    date: '2022/08/05 11:00:00',
    accent: {
      title: 'Промо',
      icon: 'megaphone',
    },
  },
  {
    id: 3,
    title: 'Зустрічай нову серію смартфонів та навушників від Samsung',
    imgURL: imgPromoDemo,
    path: '/',
    date: '2022/08/05 11:00:00',
    accent: {
      title: 'Промо',
      icon: 'megaphone',
    },
  },
  {
    id: 4,
    title: 'Мобільний телефон Xiaomi Redmi 9C 3/64GB',
    imgURL: imgPromoDemo,
    path: '/',
    date: '2022/08/05 11:00:00',
    accent: {
      title: 'Промо',
      icon: 'megaphone',
    },
  },
  {
    id: 5,
    title: 'Зустрічай нову серію смартфонів та навушників від Samsung',
    imgURL: imgPromoDemo,
    path: '/',
    date: '2022/08/05 11:00:00',
    accent: {
      title: 'Промо',
      icon: 'megaphone',
    },
  },
];

/* Экономика */
export const ecomica = [
  {
    id: 1,
    title: 'McDonald’s відновлює роботу ресторанів в Україні: де відкриються перші',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 2,
    title: 'Рада готує новий податковий сюрприз для обмінників: Гетманцев дав роз`яснення',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors2,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 3,
    title: 'Росія хоче перемкнути Запорізьку АЕС на Крим: експерт пояснив шанси і ризики',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 4,
    title: 'Як Ощадбанк під час війни безперебійно підтримує аграріїв',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 5,
    title: 'Переселенці зможуть отримувати виплати навіть у разі втрати паспорта: що відомо',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors2,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 6,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    time: '2022/08/05 11:00:00',
    category: 'articles',
    img: choiceRedactors2,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 7,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною',
    time: '2022/08/05 11:00:00',
    category: 'articles',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },

  {
    id: 8,
    title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
    time: '2022/08/05 11:00:00',
    category: 'news',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 9,
    title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
    time: '2022/08/05 11:00:00',
    category: 'articles',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
  {
    id: 10,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 11:00:00',
    category: 'articles',
    img: choiceRedactors1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentColor: false,
    },
  },
];

/* Лайфстайл */
export const lifeStyle = [
  {
    id: 1,
    title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: imgLifeStyle1,
    path: '/',
    accent: {
      title: 'Інтерв’ю',
      icon: 'microphone',
      accentcolor: false,
    },
  },
  {
    id: 2,
    title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: imgLifeStyle2,
    path: '/',
    accent: false,
  },
  {
    id: 3,
    title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: null,
    path: '/',
    accent: null,
  },
  {
    id: 4,
    title: 'Що подивитися ввечері: топ-5 українських фільмів',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: imgLifeStyle3,
    path: '/',
    accent: null,
  },
  {
    id: 5,
    title: 'Яке свято відзначають 9 серпня: прикмети, традиції та заборони цього дня',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: imgLifeStyle4,
    path: '/',
    accent: {
      title: 'Ексклюзив',
      icon: 'excluziv',
      accentcolor: true,
    },
  },
  {
    id: 6,
    title: 'Вакарчук виклав неймовірне відео виконання гімну України в Іспанії',
    time: '2022/08/05 14:59:00',
    category: 'articles',
    img: imgLifeStyle2,
    path: '/',
    accent: {
      title: 'Новина з відео',
      icon: 'video',
    },
  },
  {
    id: 7,
    title: 'Топ-7 повсякденних речей, які не мінялися протягом століть',
    time: '2022/08/05 14:59:00',
    category: 'articles',
    img: imgLifeStyle1,
    path: '/',
    accent: null,
  },

  {
    id: 8,
    title: 'Арестович розповів про шалений заробіток, трьох дружин і дітей. Відео',
    time: '2022/08/05 14:59:00',
    category: 'news',
    img: imgLifeStyle4,
    path: '/',
    accent: null,
  },
  {
    id: 9,
    title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
    time: '2022/08/05 14:59:00',
    category: 'articles',
    img: null,
    path: '/',
    accent: null,
  },
  {
    id: 10,
    title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    time: '2022/08/05 14:59:00',
    category: 'articles',
    img: imgLifeStyle3,
    path: '/',
    accent: null,
  },
];

/* Футер меню */
export const footerMenu = [
  {
    id: 1,
    title: 'Всі новини',
    path: '',
    submenu: null,
  },
  {
    id: 2,
    title: 'COVID-19',
    path: '',
    submenu: null,
  },
  {
    id: 3,
    title: 'Війна',
    path: '',
    submenu: null,
  },
  {
    id: 4,
    title: 'Політика',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Україна',
        path: '',
      },
      {
        id: 2,
        title: 'Світ',
        path: '',
      },
    ],
  },
  {
    id: 5,
    title: 'Здоров’я',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Дієти',
        path: '',
      },
      {
        id: 2,
        title: 'Краса',
        path: '',
      },
      {
        id: 3,
        title: 'Секс',
        path: '',
      },
      {
        id: 4,
        title: 'Психологія',
        path: '',
      },
      {
        id: 5,
        title: 'Медицина',
        path: '',
      },
    ],
  },
  {
    id: 6,
    title: 'Події',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'ДТП',
        path: '',
      },
      {
        id: 2,
        title: 'Катастрофи',
        path: '',
      },
      {
        id: 3,
        title: 'Кримінал',
        path: '',
      },
    ],
  },
  {
    id: 7,
    title: 'Лайфстайл',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Історії з життя',
        path: '',
      },
      {
        id: 2,
        title: 'Подорожі',
        path: '',
      },
      {
        id: 3,
        title: 'Кухня',
        path: '',
      },
      {
        id: 4,
        title: 'Шоубізнес',
        path: '',
      },
      {
        id: 5,
        title: 'Мода та стиль',
        path: '',
      },
      {
        id: 6,
        title: 'Зірковий гороскоп',
        path: '',
      },
    ],
  },
  {
    id: 8,
    title: 'Суспільство',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Охорона здоров’я',
        path: '',
      },
      {
        id: 2,
        title: 'Безпека',
        path: '',
      },
      {
        id: 3,
        title: 'Екологія',
        path: '',
      },
      {
        id: 4,
        title: 'Релігія',
        path: '',
      },
    ],
  },
  {
    id: 9,
    title: 'Регіони',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Київ',
        path: '',
      },
      {
        id: 2,
        title: 'Одеса',
        path: '',
      },
      {
        id: 3,
        title: 'Харків',
        path: '',
      },
      {
        id: 4,
        title: 'Львів',
        path: '',
      },
    ],
  },
  {
    id: 10,
    title: 'Техно',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Наука',
        path: '',
      },
      {
        id: 2,
        title: 'Гаджети',
        path: '',
      },
      {
        id: 3,
        title: 'ІТ',
        path: '',
      },
      {
        id: 4,
        title: 'Космос',
        path: '',
      },
    ],
  },
  {
    id: 11,
    title: 'Економіка',
    path: '',
    submenu: [
      {
        id: 1,
        title: 'Фінанси',
        path: '',
      },
      {
        id: 2,
        title: 'Комунальні послуги',
        path: '',
      },
      {
        id: 3,
        title: 'Бізнес',
        path: '',
      },
      {
        id: 4,
        title: 'Львів',
        path: '',
      },
    ],
  },
  {
    id: 12,
    title: 'Спорт',
    path: '',
    submenu: null,
  },
];

/* Футер о новстном сайте меню */
export const footerNewsCompanyMenu = [
  {
    id: 1,
    title: 'Про нас',
    path: '',
  },
  {
    id: 2,
    title: 'Контакти',
    path: '',
  },
  {
    id: 3,
    title: 'Структура власності',
    path: '',
  },
  {
    id: 4,
    title: 'Команда',
    path: '',
  },
  {
    id: 5,
    title: 'Медіакіт',
    path: '',
  },
];

/* Футер соцсети */
export const socList = [
  {
    id: 1,
    title: 'YouTube',
    link: 'https://www.youtube.com/',
    icon: iconSocYouTube,
  },
  {
    id: 2,
    title: 'Telegram',
    link: 'https://www.youtube.com/',
    icon: iconSocTelegram,
  },
  {
    id: 3,
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: iconSocInstagram,
  },
  {
    id: 4,
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: iconSocFB,
  },
  {
    id: 5,
    title: 'TikTok',
    link: 'https://www.tiktok.com/uk-UA/',
    icon: iconSocTikTok,
  },
  {
    id: 6,
    title: 'Google News',
    link: 'https://news.google.com/home?hl=ru&gl=UA&ceid=UA:ru',
    icon: iconSocGoogleNews,
  },
];
