import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            name="name"
            id="name-input"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição da Carta:
          <textarea
            type="text"
            name="description"
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1:
          <textarea
            type="number"
            name="attr1"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2:
          <textarea
            type="number"
            name="attr2"
            id="attr1-input"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3:
          <textarea
            type="number"
            name="attr3"
            id="attr1-input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem:
          <textarea
            type="text"
            name="image"
            id="image-input"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select
            type="text"
            name="rare"
            id="rare-input"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="submit"
          name="save"
          id="save-button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
