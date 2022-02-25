import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList, deleteCard } = this.props;
    return (
      <div>
        {
          cardList.map(({
            name,
            description,
            attr1,
            attr2,
            attr3,
            image,
            rare,
            isTrunfo,
          }) => (
            <div key={ name }>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ isTrunfo }
              />

              <button
                type="button"
                name="delet"
                data-testid="delete-button"
                onClick={ () => deleteCard(name) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default CardList;
