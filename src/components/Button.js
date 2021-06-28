import React from 'react';
import './Footer.css';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      BackgroundColor: "BLACK"};
  };

render(){
    return (
      <div className='app'>
        <button className={this.state.BackgroundColor === "BLACK" ? "Black" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>CHANGE TO BLACK</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>CHANGE TO WHITE</button>
      </div>
    );
  }
}

export default Button;