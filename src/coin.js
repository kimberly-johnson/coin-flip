import React from 'react';
import { directive } from '@babel/types';

class Coin extends React.Component {
  static defaultProps = { color: "aqua" }

  render() {
    console.log(this.props.color);
    return (
      <div>
        <div style={{
          borderRadius: "50%", backgroundColor: this.props.color,
          height: "100px", width: "100px", margin: "0 46vw"
        }}></div>
      </div>
    )
  }
}

export default Coin;