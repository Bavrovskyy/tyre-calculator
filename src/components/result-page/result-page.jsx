import React from 'react';
import './result-page.css';
import { SelectValuePage } from '../select-page/select-page';


export class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'result',
        };
    }

    changePage(page) {
        this.setState({ page });
    }

    render() {

        /*Geting Tyre Dimeter Difference*/

        const oldTyreDiameter = (this.props.oldWidth * 2 * (this.props.oldHeight / 1000) + (this.props.oldDiameter * 2.54)).toFixed(1);
        const newTyreDiameter = (this.props.newWidth * 2 * (this.props.newHeight / 1000) + (this.props.newDiameter * 2.54)).toFixed(1);
        const tyreDiameterDif = (newTyreDiameter - oldTyreDiameter).toFixed(1);

        /*Geting Tyre Width Difference*/

        const oldWidthSM = this.props.oldWidth / 10;
        const newWidthSM = this.props.newWidth / 10;
        const widthDif = (newWidthSM - oldWidthSM).toFixed(1);

        /*Geting Tyre Circumference Difference*/

        const oldCircum = (oldTyreDiameter * 3.14).toFixed(1);
        const newCircum = (newTyreDiameter * 3.14).toFixed(1);
        const circumDif = (newTyreDiameter - oldTyreDiameter).toFixed(1);

        /*Geting Wheel Turnover Count Difference*/

        const oldCount = (Math.pow(10, 5) / oldCircum).toFixed(1);
        const newCount = (Math.pow(10, 5) / newCircum).toFixed(1);
        const countDif = (newCount - oldCount).toFixed(1);

        /*Geting Vehicle Clearance Difference*/

        const clearDif = ((newTyreDiameter - oldTyreDiameter) / 2).toFixed(1);
        let resultClirents;

        if (clearDif > 0) {
            resultClirents = `Клиренс увеличится на ${Math.abs(clearDif)} см`;
        }
        else if (clearDif < 0) {
            resultClirents = `Клиренс уменьшится на ${Math.abs(clearDif)} см`;
        }
        else {
            resultClirents = `Клиренс не изменится`;
        }

        /*Calculate The Speedometer Error*/   

        const ob1 = (Math.pow(90, 5) / oldCircum);
        const ob2 = (Math.pow(90, 5) / newCircum);
        const speedErr = (((ob2 - ob1) * 100) / ob1).toFixed(0);
        let resultSpeed;
        let resultSpeedErr;

        if (speedErr > 0) {
            resultSpeed = `Скорость спидометра увеличится на ${Math.abs(speedErr)}%`;
            resultSpeedErr = (90 + (speedErr * 0.9)).toFixed(1);
        }
        else if (speedErr < 0) {
            resultSpeed = `Скорость спидометра уменьшится на ${Math.abs(speedErr)}%`;
            resultSpeedErr = (90 - (Math.abs(speedErr) * 0.9)).toFixed(1);
        }
        else {
            resultSpeed = `Скорость спидометра не изменится`;
            resultSpeedErr = 90;
        }

        /*Display result massage*/

        const perc = Math.abs(tyreDiameterDif * 100) / newTyreDiameter;
        let resultMassage;
        let colorBox;
        
        if (perc < 3) {
            resultMassage = `Диаметр колеса отличается менее чем на 3%. Это безопасно.`;
            colorBox = {
                border: "1px solid green",
                backgroundColor: "rgba(0, 128, 0, 0.85)"
            };
        }
        else {
            resultMassage = `Диаметр колеса отличается более чем на 3%. Это опасно!!!`;
            colorBox = {
                border: "1px solid red",
                backgroundColor: "rgba(255, 0, 0, 0.85)"
            };

        }


        if (this.state.page === 'result') {
            return (
                <div id='result-page'>
                    <div className='curent-size'>
                        <div className='curent-size-conteiner'>
                            <p className='curent-size-title'>Новый размер</p>
                            <div className='curent-size-item'>
                                {this.props.newWidth}
                            </div>
                            &nbsp;/&nbsp;
                            <div className='curent-size-item'>
                                {this.props.newHeight}
                            </div>
                            &nbsp;R&nbsp;
                            <div className='curent-size-item'>
                                {this.props.newDiameter}
                            </div>
                        </div>
                    </div>
                    <div className='result-conteiner'>
                        <table className='result-table'>
                            <thead>
                                <tr>
                                    <th>Показатель</th>
                                    <th>Старый</th>
                                    <th>Новый</th>
                                    <th>Изменение</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Диаметр колеса</td>
                                    <td>{oldTyreDiameter} см</td>
                                    <td>{newTyreDiameter} см</td>
                                    <td>{tyreDiameterDif} см</td>
                                </tr>
                                <tr>
                                    <td>Ширина колеса</td>
                                    <td>{oldWidthSM} см</td>
                                    <td>{newWidthSM} см</td>
                                    <td>{widthDif} см</td>
                                </tr>
                                <tr>
                                    <td>Окружность</td>
                                    <td>{oldCircum} см</td>
                                    <td>{newCircum} см</td>
                                    <td>{circumDif} см</td>
                                </tr>
                                <tr>
                                    <td>Оборотов на км</td>
                                    <td>{oldCount} об</td>
                                    <td>{newCount} об</td>
                                    <td>{countDif} об</td>
                                </tr>
                                <tr>
                                    <td>Изменение клиренса</td>
                                    <td colspan="3">{resultClirents}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='result-footer'>
                        <div className='result-speed'>
                            <p>{resultSpeed}</p>
                            <p>При реальной скорости 90 км/ч, спидометр будет показывать {resultSpeedErr} км/ч.</p>
                        </div>
                        <div className='result-massage' style={colorBox}>
                            {resultMassage}
                        </div>
                        <button className='button button-result' onClick={() => this.changePage('select-value')}>Назад</button>
                    </div>
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