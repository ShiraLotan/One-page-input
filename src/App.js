import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

 dimLights = () =>
{
  document.getElementById("backgroundDim").style.display = "block";
}

  render() {
    return (
      <div className="App">
        <div id='backgroundDim' ></div>
          <input onClick={this.dimLights} type='text'/>
      </div>
    );
  }
}


export default App;
