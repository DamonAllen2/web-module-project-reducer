import React, { useReducer} from 'react';

import {  applyNumber, changeOperation, clearDisplay, memoryUpdate, memoryApply, memoryClear } from '../actions/index.js';
import { initialState, reducer } from '../reducers/index.js'
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onClick = (value) => {
    dispatch(applyNumber(value))
  }

  const changeOperator = (operation) => {
    dispatch(changeOperation(operation))
  }

  const clearTheDisplay = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryUpdate = () => {
    dispatch(memoryUpdate())
  }

  const handleMemoryApply = () => {
    dispatch(memoryApply())
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemoryUpdate()}/>
              <CalcButton value={"MR"} onClick={() => handleMemoryApply()}/>
              <CalcButton value={"MC"} onClick={() => handleMemoryClear()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => onClick(1)}/>
              <CalcButton value={2} onClick={() => onClick(2)}/>
              <CalcButton value={3} onClick={() => onClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => onClick(4)}/>
              <CalcButton value={5} onClick={() => onClick(5)}/>
              <CalcButton value={6} onClick={() => onClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => onClick(7)}/>
              <CalcButton value={8} onClick={() => onClick(8)}/>
              <CalcButton value={9} onClick={() => onClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperator('+')}/>
              <CalcButton value={"*"} onClick={() => changeOperator('*')}/>
              <CalcButton value={"-"} onClick={() => changeOperator('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {clearTheDisplay()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
