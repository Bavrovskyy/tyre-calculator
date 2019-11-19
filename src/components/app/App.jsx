import React from 'react';
import './app.css';
import { WelcomePage } from '../welcome-page/welcome-page';
import { SelectValuePage } from '../select-page/select-page';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'welcome',
    };
  }

  changePage(page) {
    this.setState({ page });
  }

  render() {
    if (this.state.page === 'welcome') {
      return (
        <WelcomePage onClick={() => this.changePage('select-value')} />
      );
    }
    if (this.state.page === 'select-value') {
      return (
        <SelectValuePage />
      );
    }
  }
}