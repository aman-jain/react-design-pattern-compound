import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageHolder from './components/ImageHolder';
import Toggle from './components/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <h4>Component Pattern</h4>
          <ImageHolder>
            <ImageHolder.Image imageSrc='https://images.unsplash.com/photo-1523973814736-0ac95210c2fe' size='small-image'/>
            <ImageHolder.Description/>
          </ImageHolder> 
          <Toggle />
        </p>
      </div>
    );
  }
}

export default App;


