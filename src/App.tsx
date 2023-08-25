import '../reset.css';
import '../header.css';
import '../style.css';
import React from 'react';

import Header from './components/Header';
import { CharacterRatings } from './components/CharacterRatings';
import CharacterCards from './components/CharacterCards';
import characters from './assets/fma-data';

function App() {
  return (
    <>
      <Header />
      <CharacterRatings characters={characters} />
      <CharacterCards characters={characters} />
    </>
  );
}

export { App };
