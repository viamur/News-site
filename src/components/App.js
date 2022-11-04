import Header from './Header/Header';
import InfoWar from './InfoWar/InfoWar';
import Hero from './Hero/Hero';
import AllNews from './AllNews/AllNews';
import ChoiceRedaction from './ChoiceRedaction/ChoiceRedaction';
import Regions from './Regions/Regions';
import VideoSection from './VideoSection/VideoSection';

import './App.scss';

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
      </main>
    </>
  );
}

export default App;
