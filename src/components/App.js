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
import FirstSectionNews from '../section/FirstSectionNews/FirstSectionNews';
import SecondSectionNews from '../section/SecondSectionNews/SecondSectionNews';
import Footer from './Footer/Footer';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoWar />
        <Hero />
        <FirstSectionNews />
        <VideoSection />
        <SecondSectionNews />
        <Footer />
      </main>
    </>
  );
}

export default App;
