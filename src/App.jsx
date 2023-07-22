// import { useState } from 'react';
import Button from './components/button';
import { Operator, ResetButton } from './components/button';
import Screen from './components/screen';
import '../public/styles.css';


function App() {
  return <div className='layout-div'>
    <Screen result="Here" />
    <div className='calculator-div'>
      <Button character="1" />
      <Button character="2" />
      <Button character="3" />
      <Operator character="+" />
      <Button character="4" />
      <Button character="5" />
      <Button character="6" />
      <Operator character="-" />
      <Button character="7" />
      <Button character="8" />
      <Button character="9" />
      <Operator character="x" />
      <ResetButton character="C" />
      <Button character="0" />
      <Button character="," />
      <Operator character="÷" />
    </div>
  </div>
}

export default App


