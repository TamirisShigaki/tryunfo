import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: '',
  rare: 'normal',
  isTrunfo: false,
  save: true,
  listCard: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.validateBtn);
  }

  validateBtn = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
    } = this.state;

    const max = 90;
    const maximum = 210;
    const sum = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);

    if (
      name !== ''
      && image !== ''
      && description !== ''
      && parseInt(attr1, 10) <= max
      && parseInt(attr2, 10) <= max
      && parseInt(attr3, 10) <= max
      && parseInt(attr1, 10) >= 0
      && parseInt(attr2, 10) >= 0
      && parseInt(attr3, 10) >= 0
      && sum <= maximum
    ) {
      this.setState({ save: false });
    } else {
      this.setState({ save: true });
    }
  }

  saveBtn = (event) => {
    event.preventDefault();
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      isTrunfo,
      save,
    } = this.state;

    const newCard = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      isTrunfo,
      save,
    };

    this.setState((prevState) => ({
      listCard: [...prevState.listCard, newCard],
      hasTrunfo: [...prevState.listCard, newCard].some((card) => card.isTrunfo),
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      isTrunfo: false,
    }));
  }

  deleteCard = (name) => {
    const { listCard } = this.state;

    listCard.forEach((card) => {
      if (card.name === name && card.isTrunfo === true) {
        this.setState({ hasTrunfo: false });
      }
    });

    this.setState(({ listCard: listCard.filter((card) => card.name !== name) }));
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      isTrunfo,
      save,
      hasTrunfo,
      listCard,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ isTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ save }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveBtn }
        />
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
        <CardList
          cardList={ listCard }
          deleteCard={ this.deleteCard }
        />
      </div>
    );
  }
}

export default App;
