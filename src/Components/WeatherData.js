import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempeture from './WeatherTempeture';


const WeatherData = () => (
    <div>
        <WeatherTempeture>
            temperature ={20}
            weatherState={`cloudy`}
        </WeatherTempeture>
        <WeatherExtraInfo humidity={88} wind = {"10 m/s"} >

        </WeatherExtraInfo>
    </div>
    
);
export default WeatherData;