import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const INITIAL_STATE = {
  filterName: '',
  filterRare: 'todas',
};

class CardList extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleFilter = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { cardList, deleteCard } = this.props;
    const { filterName, filterRare } = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.handleFilter }
            name="filterName"
          />
          <select
            type="text"
            data-testid="rare-filter"
            onChange={ this.handleFilter }
            name="filterRare"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        <div>
          {
            cardList.filter((rareCard) => (filterRare === 'todas'
              ? rareCard
              : rareCard.rare === filterRare))
              .filter((nameCard) => nameCard.name.toLowerCase()
                .includes(filterName.toLowerCase()))
              .map(({
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
      </>
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
