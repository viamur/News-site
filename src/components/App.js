import Header from '../section/Header/Header';
import InfoWar from '../section/InfoWar/InfoWar';
import Hero from '../section/Hero/Hero';
import VideoSection from '../section/VideoSection/VideoSection';
import FirstSectionNews from '../section/FirstSectionNews/FirstSectionNews';
import SecondSectionNews from '../section/SecondSectionNews/SecondSectionNews';
import Footer from '../section/Footer/Footer';

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
