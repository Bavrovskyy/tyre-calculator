import React from 'react';
import './select-page.css';
import { Result } from '../result-page/result-page';

export class SelectValuePage extends React.Component {
  constructor() {
    super();
    this.state = {
      oldWidth: 145,
      oldHeight: 25,
      oldDiameter: 12,
      newWidth: 145,
      newHeight: 25,
      newDiameter: 12
    }
    const arr = [
      [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325],
      [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
      [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    ];
    this.arr = arr;
  }

  onOptionChange0(event) {
    this.setState({oldWidth: +event.target.value })
  }

  onOptionChange1(event) {
    this.setState({oldHeight: +event.target.value })
  }

  onOptionChange2(event) {
    this.setState({oldDiameter: +event.target.value })
  }

  onOptionChange3(event) {
    this.setState({newWidth: +event.target.value })
  }

  onOptionChange4(event) {
    this.setState({newHeight: +event.target.value })
  }

  onOptionChange5(event) {
    this.setState({newDiameter: +event.target.value })
  }

  changePage(page) {
    this.setState({ page });
  }


  render() {
    console.log(this.state.newWidth, this.state.newHeight, this.state.newDiameter)
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
        <Result
          {...this.state}
        />
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
          {this.state.oldWidth} {this.state.newWidth} {this.state.newWidth - this.state.oldWidth}
        </div>
        <div>
          {this.state.oldHeight} {this.state.newHeight} {this.state.newHeight - this.state.oldHeight}
        </div>
        <div>
          {this.state.oldDiameter} {this.state.newDiameter} {this.state.newDiameter - this.state.oldDiameter}
        </div>

        <button onClick={() => this.changePage('result')}>Рассчитать</button>
      </div>
    );
  }
}
