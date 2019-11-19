import React from 'react';
import './welcome-page.css';

export function WelcomePage(props) {
    return (
      <div>
        <div>
          <h1>Шинный калькулятор</h1>
        </div>
        
        <button onClick={props.onClick}>Начать</button>
      </div>
    );
  }