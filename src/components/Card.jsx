import React from 'react';
import propTypes from 'prop-types';

const superCard = (value) => {
  if (value) {
    return <p data-testid="trunfo-card">Super Trunfo</p>;
  }
};

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h3 data-testid="description-card">{ cardDescription }</h3>
        <h2 data-testid="attr1-card">{ cardAttr1 }</h2>
        <h2 data-testid="attr2-card">{ cardAttr2 }</h2>
        <h2 data-testid="attr3-card">{ cardAttr3 }</h2>
        <p data-testid="rare-card">{ cardRare }</p>
        { superCard(cardTrunfo) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
