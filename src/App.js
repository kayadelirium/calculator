import './App.css';
import React from 'react'
import Output from './components/output/output';
import Button from './components/button/button'

function App() { 
  let [state0, setState0] = React.useState(0)
  let [state1, setState1] = React.useState(0)
  let [sign, setSign] = React.useState(0)

  let values = [["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["CE","0","=","/"]]
  let makeButton = ((text) => <Button text = {text} prev = {{state0, setState0}} curr = {{state1, setState1}} op = {{sign, setSign}} />)
  let makeLine = ((array) => <div> {array.map(makeButton)} </div>) 
  
  return (
    <div className="App">
      <div>
        <Output state = {state0} />
        <Output state = {state1} />
      </div>
      
      {values.map(makeLine)}
    </div>
  );
}

export default App;
