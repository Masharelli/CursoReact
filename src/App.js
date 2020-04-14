import React, { Component } from 'react';
//Se importa el componente y se utiliza directo ese componente
import WeatherLocation from './Components/WeatherLocations';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        Wheater App(Aplicacion del clima)!
        <WeatherLocation> </WeatherLocation>
      </div>
    )
  }
}

export default App;
