import React from 'react';
import {connect} from 'react-redux';
import {inc,dec,res} from './actions';
import './App.css'

function App(props) {
  const I=()=>props.Inc()
  const D=()=>props.Dec()
  const R=()=>props.Res()
  return (
    <div id="parent">
        <h1>Counter:{props.counter}</h1>
        <div id="bttns">
        <button onClick={I} >+</button>
        <button onClick={D} >-</button>
        <button onClick={R} >Reset</button>
        </div>
    </div>
  );
}
const mapStateToProps=(state)=>({
    counter:state
})
const dispatchToProps=(dispatch)=>({
  Inc:()=>dispatch(inc()),
  Dec:()=>dispatch(dec()),
  Res:()=>dispatch(res()),
})

export default connect(mapStateToProps,dispatchToProps)(App);
