import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'; 
//Arrow Function
//props es un parametro
const WeatherLocation = () =>(
    <div>
        <Location city = {"Barcelona"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;