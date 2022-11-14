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

import './App.scss';
import Economica from './Economica/Economica';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoWar />
        <Hero />
        <AllNews />
        <ChoiceRedaction />
        <Regions />
        <VideoSection />
        <Kolonki />
        <Polituka />
        <BetweenSection />
        <Promo />
        <BetweenSection />
        <Economica />
        <BetweenSection />
      </main>
    </>
  );
}

export default App;
