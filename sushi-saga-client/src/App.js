import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushiArray: [],
    count : 4,
    baseCount : 0,
    clickedPlate: [],
    cashLeft: 50
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json()).then(data => this.setState({sushiArray: data}))
  }

  clickSushi = (obj) => {
    this.setState({clickedPlate: [...this.state.clickedPlate, obj]})
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.clickedPlate !== this.state.clickedPlate){

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.setState({ cashLeft: 50 - (this.state.clickedPlate.map((obj => obj.price)).reduce(reducer)) })
      
    }
  }

  clickMore = () => {
    this.setState({count : this.state.count + 4})
    this.setState({baseCount : this.state.baseCount + 4})
  }

  render() {
    
    return (
      <div className="app">
        <SushiContainer cashLeft={this.state.cashLeft} clickedPlate ={this.state.clickedPlate} baseCount={this.state.baseCount} count={this.state.count} clickMore={this.clickMore} clickSushi={this.clickSushi} sushiArray={this.state.sushiArray}/>
        <Table cashLeft={this.state.cashLeft} clickedPlate={this.state.clickedPlate}/>
      </div>
    );
  }
}

export default App;