import React, { Component } from 'react';
import Widget from '../common/widget/Widget.js'

let location = 'DENVER, CO';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{"display":"flex", "justify-content": "space-around"}}>
        {location}
        </h1>
        <div style={{"display":"flex", "justify-content":"center"}}>
          <Widget />
          <Widget />
        </div>
        <div style={{"display":"flex", "justify-content":"center"}}>
          <Widget />
          <Widget />
        </div>
      </div>
    );
  }
}

export default Home;
