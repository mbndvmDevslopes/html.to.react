import React, { Component } from 'react';
import '../../character-cards.css';

type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

type CharacterCardsProps = {
  characters: Character[];
};

class CharacterCards extends Component<CharacterCardsProps> {
  render() {
    return (
      <section id="character-cards">
        {this.props.characters.map((item, index) => (
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

export default CharacterCards;
