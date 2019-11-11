import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WelcomePage } from './welcome_page';
import { SelectValuePage } from './select_value_page';

class App extends React.Component {
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
        <WelcomePage onClick={() => this.changePage('select_value')} />
      );
    }
    if (this.state.page === 'select_value') {
      return (
        <SelectValuePage />
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
