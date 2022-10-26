import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            type="textarea"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="number1">
          Attr01
          <input
            id="number1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="number2">
          Attr02
          <input
            id="number2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="number3">
          Attr03
          <input
            id="number3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            name="image"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            id="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            id="trunfo"
            name="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button type="button" id="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
