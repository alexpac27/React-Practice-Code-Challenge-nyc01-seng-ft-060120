// import React, { Fragment } from 'react'
import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {
  
  render(){
    let sushi = this.props.sushiArray
    let count = this.props.count
    let baseCount = this.props.baseCount
    let showSushi = sushi.filter(obj => obj.id > baseCount && obj.id <= count)

    return (
     
        <div className="belt">
          { showSushi.map(obj => <Sushi cashLeft={this.props.cashLeft} clickedPlate ={this.props.clickedPlate} clickSushi={this.props.clickSushi} key={obj.id} sushiInfo={obj}/>)}
          
          <MoreButton clickMore={this.props.clickMore}/>
        </div>
   
    )
  }
}

export default SushiContainer