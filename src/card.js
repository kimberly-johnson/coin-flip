import React from 'react';
import Coin from './coin';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "aqua", totalFlip: 0, headsTotal: 0, tailsTotal: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  flip() {
    const num = Math.random();

    const flip = num > .5 ? "heads" : "tails";

    return flip;
  }

  handleClick() {
    const currentCoin = this.flip();

    if (currentCoin === "heads"){
      this.setState(state => ({ color: "red", totalFlip: state.totalFlip + 1, headsTotal: state.headsTotal + 1 }));
    } else {
        this.setState(state => ({ color: "aqua", totalFlip: state.totalFlip + 1, tailsTotal: state.tailsTotal + 1 }));
    }
  }



  render() {
    console.log(this.state.color)
    return (
      <div>
        <h3>Let's flip a coin!</h3>
        <Coin color={ this.state.color }/>
        <button onClick={this.handleClick} >FLIP ME!!!</button>
        <span>Out of {this.state.totalFlip} flips, there have been {this.state.headsTotal} heads and {this.state.tailsTotal} tails.</span>
      </div>
    )
  }
}

export default Card
