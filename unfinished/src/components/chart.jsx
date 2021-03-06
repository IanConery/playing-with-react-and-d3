import React from 'react';
import ScatterPlot from './scatter-plot';

const styles = {
  width: 1000,
  height: 500,
  padding: 30
};

const numDataPoints = 50;
const randomNum = ()=> Math.floor(Math.random()*1000);
const randomDataSet = ()=>{
  return Array.apply(null, {length: numDataPoints}).map(()=>[randomNum(),randomNum()]);

};

export default class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: randomDataSet()};
  }
  randomizeData(){
    this.setState({data: randomDataSet()});
  }
  render(){
    return <div>
      <h1>Playing With React and D3</h1>
      <ScatterPlot {...this.state} {...styles} />
      <div className="controls">
        <button className="btn randomize" onClick={()=>this.randomizeData()}>
          Randomize Data
        </button>
      </div>
    </div>
  }
}