import React from 'react';
import './App.css';
import './bootstrap.min.css';
import ClickButtons from './ClickButtons';

function RandomButton() {
  return (
    <div>
      Author Quiz
      <ClickButtons numberOfButtons={20} onSelection={x => console.log(`${x}. button clicked `)} />;
    </div>
  );
}

export default RandomButton;
