// import { useState } from 'react';
import Button from './components/button';
import { Operator, ResetButton } from './components/button';
import Screen from './components/screen';
import '../public/styles.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "x", "÷"];

function numButton() {
  numbers.forEach(() => {
    return <Button character={numbers.number} />
  })
};

function opButton() {
  operators.forEach(() => {
    return <Operator character={operators.operator} />
  })

};


function App() {
  return <div className='layout-div'>
    <Screen result="Here" />
    <div className='calculator-div'>
      {numbers.map(numButton)}
      {operators.map(opButton)}

    </div>
  </div>
}

export default App


