import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    //Aqui utilizamos el template de string 
    <div>
        <span>
            {`${humidity} % - `}
        </span>
        <span>
            {`${wind} viento `}
        </span>
    </div>
);

export default WeatherExtraInfo;