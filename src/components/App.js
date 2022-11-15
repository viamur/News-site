import Header from './Header/Header';
import InfoWar from './InfoWar/InfoWar';
import Hero from './Hero/Hero';
import AllNews from './AllNews/AllNews';
import ChoiceRedaction from './ChoiceRedaction/ChoiceRedaction';
import Regions from './Regions/Regions';
import VideoSection from './VideoSection/VideoSection';
import Kolonki from './Colonki/Colonki';
import Polituka from './Polituka/Polituka';
import BetweenSection from './BetweenSection/BetweenSection';
import Promo from './Promo/Promo';
import Economica from './Economica/Economica';
import Lifestyle from './Lifestyle/Lifestyle';

import './App.scss';
import Footer from './Footer/Footer';
import FirstSectionNews from '../section/FirstSectionNews/FirstSectionNews';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoWar />
        <Hero />
        <FirstSectionNews />
        <VideoSection />
        <Kolonki />
        <Polituka />
        <BetweenSection />
        <Promo />
        <BetweenSection />
        <Economica />
        <BetweenSection />
        <Lifestyle />
        <Footer />
      </main>
    </>
  );
}

export default App;
