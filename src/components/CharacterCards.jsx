import '../../character-cards.css';
import PropTypes from 'prop-types';

import { Component } from 'react';

class CharacterCards extends Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-titles">
              <h3>{item.name}</h3>
              <h4>{item.nickName}</h4>
            </div>
            <img src={item.imageUrl} alt="" />
            <p>{item.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

CharacterCards.propTypes = PropTypes;
export default CharacterCards;
