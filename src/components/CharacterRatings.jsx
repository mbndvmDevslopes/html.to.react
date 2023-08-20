import '../../character-ratings.css';
import PropTypes from 'prop-types';

export const CharacterRatings = ({ data }) => {
  data.sort((a, b) => b.votes - a.votes);

  const topFiveCharacters = data.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {topFiveCharacters.map((character, index) => (
          <tr key={index} className={(index + 1) % 2 === 0 ? 'light' : 'dark'}>
            <td>{character.name}</td>
            <td>{character.skillset}</td>
            <td>{character.votes}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};
CharacterRatings.propTypes = PropTypes;
