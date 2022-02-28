import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

// Requisitos bonus 10, 11 e 12 com ajuda do Kleverson Eller - Turma 19 - Tribo C

const INITIAL_STATE = {
  filterName: '',
  filterRare: 'todas',
  filterTrunfo: false,
  save: false,
};

class CardList extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleFilter = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value }, this.validateTrunfo);
  }

  validateTrunfo = () => {
    const { filterTrunfo } = this.state;

    return filterTrunfo ? this.setState({ save: true }) : this.setState({ save: false });
  }

  render() {
    const { cardList, deleteCard } = this.props;
    const { filterName, filterRare, filterTrunfo, save } = this.state;
    return (
      <>
        <div>
          <p>Filtro de Busca</p>
          <label htmlFor="name-filter">
            <input
              disabled={ save }
              type="text"
              data-testid="name-filter"
              id="name-filter"
              onChange={ this.handleFilter }
              name="filterName"
              placeholder="Nome da Carta"
            />
          </label>

          <select
            disabled={ save }
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

          <label htmlFor="trunfo-filter">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              id="trunfo-filter"
              onChange={ this.handleFilter }
              name="filterTrunfo"
            />
          </label>
        </div>
        <div>
          {
            cardList.filter((trunfoCard) => (filterTrunfo === true
              ? trunfoCard.isTrunfo === filterTrunfo
              : trunfoCard))
              .filter((rareCard) => (filterRare === 'todas'
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
