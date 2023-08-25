import '../../character-ratings.css';

import React from 'react';
type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

type CharacterRatingsProps = {
  characters: Character[];
};

export const CharacterRatings: React.FC<CharacterRatingsProps> = ({
  characters,
}) => {
  characters.sort((a, b) => b.votes - a.votes);

  const topFiveCharacters = characters.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {topFiveCharacters.map((character, index) => (
            <tr
              key={index}
              className={(index + 1) % 2 === 0 ? 'light' : 'dark'}
            >
              <td>{character.name}</td>
              <td>{character.skillset}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
