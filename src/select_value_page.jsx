import React from 'react';
import { Select } from './select';

export class SelectValuePage extends React.Component {
  constructor() {
    super();

    this.state = {
        value: '',
    };
  }


  render() {
    const { value } = this.state;

    return (
      <div>
        <p>Старый размер</p>
        <Select />
        <p>Новый размер</p>
        <Select />

        <button
        >Рассчитать</button>
      </div>
    );
  }
}
