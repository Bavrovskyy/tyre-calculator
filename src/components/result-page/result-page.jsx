import React from 'react';
import './result-page.css';
import { SelectValuePage } from '../select-page/select-page';


export class Result extends React.Component {

    constructor() {
        super();
        this.state = {
            page: 'result',
        };
    }

    changePage(page) {
        this.setState({ page });
    }
  

    render() {

        if (this.state.page === 'result') {
            return (
                <div>
                    <div>
                        Result
                    </div>

                    <button onClick={() => this.changePage('select-value')}>Назад</button>
                </div>
            );
        }
        if (this.state.page === 'select-value') {
            return (
                <SelectValuePage />
            );
        }
    }
    
}