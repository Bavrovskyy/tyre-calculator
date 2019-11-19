import React from 'react';
import './select-page.css';
import { Result } from '../result-page/result-page';

export class SelectValuePage extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 145,
      b: 25,
      c: 12,
      d: 145,
      e: 25,
      f: 12
    }
    const arr = [
      [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325],
      [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
      [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    ];
    this.arr = arr;
  }

  onOptionChange0(event) {
    let a = +event.target.value;
    this.setState({a: a })
  }
  onOptionChange1(event) {
    let b = +event.target.value;
    this.setState({b: b })
  }

  onOptionChange2(event) {
    let c = +event.target.value;
    this.setState({c: c })
  }

  onOptionChange3(event) {
    let d = +event.target.value;
    this.setState({d: d })
  }

  onOptionChange4(event) {
    let e = +event.target.value;
    this.setState({e: e })
  }

  onOptionChange5(event) {
    let f = +event.target.value;
    this.setState({f: f })
  }

  changePage(page) {
    this.setState({ page });
  }


  render() {
    const tags0 = this.arr[0].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags1 = this.arr[1].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags2 = this.arr[2].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )

    const tags3 = this.arr[0].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags4 = this.arr[1].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )
    const tags5 = this.arr[2].map(option1 => (
      <option key={option1}
        value={option1}>
          {option1}
      </option>
    )
    )

    if (this.state.page === 'select-value') {
      return (
        <SelectValuePage onClick={() => this.changePage('result')}/>
      );
    }
    if (this.state.page === 'result') {
      return (
        <Result />
      );
    }


    return (
      <div>
        <h3>Старый размер</h3>
        <div>
          <select  value={this.props.value} onChange={this.onOptionChange0.bind(this)}>{tags0}</select>
          &nbsp;/&nbsp;
          <select  value={this.props.value} onChange={this.onOptionChange1.bind(this)}>{tags1}</select>
          &nbsp;R&nbsp;
          <select  value={this.props.value} onChange={this.onOptionChange2.bind(this)}>{tags2}</select>
        </div>

        <h3>Новый размер</h3>
        <div>
          <select  value={this.props.value} onChange={this.onOptionChange3.bind(this)}>{tags3}</select>
          &nbsp;/&nbsp;
          <select  value={this.props.value} onChange={this.onOptionChange4.bind(this)}>{tags4}</select>
          &nbsp;R&nbsp;
          <select  value={this.props.value} onChange={this.onOptionChange5.bind(this)}>{tags5}</select>
        </div>

        <h2>Изменение</h2>
        <div>
          {this.state.a} {this.state.d} {this.state.d - this.state.a}
        </div>
        <div>
          {this.state.b} {this.state.e} {this.state.e - this.state.b}
        </div>
        <div>
          {this.state.c} {this.state.f} {this.state.f - this.state.c}
        </div>

        <button onClick={() => this.changePage('result')}>Рассчитать</button>
      </div>
    );
  }
}
