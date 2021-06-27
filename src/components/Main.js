import React from 'react';
import HornedBeast from './HornedBeast';
import HornedBeast1 from './HornedBeast1';
import HornedBeast2 from './HornedBeast2';

 class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeast/>
        <HornedBeast1/>
        <HornedBeast2/>
        
      </div>
    )
  }
}

export default Main