import '../reset.css';
import '../header.css';
import '../style.css';

import Header from './components/Header';
import { CharacterRatings } from './components/CharacterRatings';
import CharacterCards from './components/CharacterCards';
import Character from '../src/assets/fma-data';

function App() {
  return (
    <>
      <Header />
      <CharacterRatings data={Character} />
      <CharacterCards data={Character} />
    </>
  );
}

export default App;
