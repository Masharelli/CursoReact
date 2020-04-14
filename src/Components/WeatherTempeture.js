import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons =  {
    cloud: "Cloud",
    cloudy: "cloudy",
    sun: 'day-sunny',
    rain: "rain",
    snow: 'snow',
    windy: 'windy' 
};


const getWeathericon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size='2x' />
    else
        return <WeatherIcons name={"day-sunny"} sie='2x'/>
};
const WeatherTempeture = ({temperature, weatherState}) => (
    <div>
        {
            getWeathericon(weatherState)
        }
        <span>
            {` ${temperature} C° `}
        </span>
    </div>
);

export default WeatherTempeture;