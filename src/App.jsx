// import { useState } from 'react';
import Button from './components/button';
import { Operator, ResetButton } from './components/button';
import Screen from './components/screen';
import '../public/styles.css';

const buttonsData = [
  { type: "button", character: "1" },
  { type: "button", character: "2" },
  { type: "button", character: "3" },
  { type: "operator", character: "+" },
  { type: "button", character: "4" },
  { type: "button", character: "5" },
  { type: "button", character: "6" },
  { type: "operator", character: "-" },
  { type: "button", character: "7" },
  { type: "button", character: "8" },
  { type: "button", character: "9" },
  { type: "operator", character: "x" },
  { type: "reset", character: "Reset" },
  { type: "button", character: "0" },
  { type: "operator", character: "÷" }
]

function App() {
  return <div className='layout-div'>
    <Screen result="Here" />
    <div className='calculator-div'>
      {buttonsData.map((button, index) => {
        switch (button.type) {
          case "button":
            return <Button key={index} character={button.character} />
          case "operator":
            return <Operator key={index} character={button.character} />
          case "reset":
            return <ResetButton key={index} character={button.character} />
          default: return null;
        }
      })}
    </div>
  </div>
}

export default App


