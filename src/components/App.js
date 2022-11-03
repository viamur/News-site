import Header from './Header/Header';
import InfoWar from './InfoWar/InfoWar';
import Hero from './Hero/Hero';
import AllNews from './AllNews/AllNews';
import ChoiceRedaction from './ChoiceRedaction/ChoiceRedaction';

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
      </main>
    </>
  );
}

export default App;
