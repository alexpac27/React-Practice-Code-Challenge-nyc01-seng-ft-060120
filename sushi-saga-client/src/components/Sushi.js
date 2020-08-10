import React from 'react'


class Sushi extends React.Component{
  state= {
    clicked: false
  }

  clickSushi = () => {
    if (this.props.cashLeft - this.props.sushiInfo.price >= 0){
      this.setState({clicked: !this.state.clicked})
      this.props.clickSushi(this.props.sushiInfo)
    }
    }
 
render(){

  return (
    
    <div className="sushi">
      <div className="plate"  onClick={this.clickSushi}>
        { this.state.clicked ? null : <img src={this.props.sushiInfo.img_url} width="100%" alt=""/> }
      </div>
      <h4 className="sushi-details">
        {this.props.sushiInfo.name} - ${this.props.sushiInfo.price}
      </h4>
    </div>
  )
}
}

export default Sushi