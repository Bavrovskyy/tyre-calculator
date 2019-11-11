import React from 'react';

export class Select extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            arr : [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325],
            arr1 : [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
            arr2 : [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        }
      }

  

    render() {
        const tags1 = this.state.arr.map(option1 => (
            <option value={option1}>{option1}</option>
            )
        )
        const tags2 = this.state.arr1.map(option1 => (
            <option value={option1}>{option1}</option>
            )
        )
        const tags3 = this.state.arr2.map(option1 => (
            <option value={option1}>{option1}</option>
            )
        )
       
    return (
        <div>
            <select>{tags1}</select>
            <select>{tags2}</select>
            <select>{tags3}</select>
        </div>
    );
  }
}
