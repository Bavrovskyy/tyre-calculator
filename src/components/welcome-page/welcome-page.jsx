import React from 'react';
import './welcome-page.css';

export function WelcomePage(props) {
    return (
      <div id='conteiner'>
        <div className='header'>
          <h1>Шинный калькулятор</h1>
          <p>TyreCalculator.com</p>
        </div>
        
        <button className='button' onClick={props.onClick}>Начать</button>
      </div>
    );
  }