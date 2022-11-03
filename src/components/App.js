import Header from './Header/Header';
import InfoWar from './InfoWar/InfoWar';
import Hero from './Hero/Hero';
import AllNews from './AllNews/AllNews';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoWar />
        <Hero />
        <AllNews />
      </main>
    </>
  );
}

export default App;
