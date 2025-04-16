import { useState } from "react";
import { getWeatherInfoFor10Days } from "../utils/getWeatherInfo"
import WeatherDetails from "./WeatherDetails";

export default function Forecast10Days({ weatherToDisplay }) {
    const [dayIndex, setDayIndex] = useState(null);
    const formatedWeather = getWeatherInfoFor10Days(weatherToDisplay.forecast.forecastday);

    function chooseDay(i) {
       setDayIndex(i);
       window.scrollTo(0, 0)
    }
  
    return (
        <div className="tendays-forecast-container">
            {dayIndex !== null && <WeatherDetails weatherToDisplay={weatherToDisplay} i={dayIndex} setDayIndex={setDayIndex}/>}
            <p>10 days forecast</p>
            <div className="tenDays-foracast-holder">
                {formatedWeather.map((day, i) => (
                    <div key={i} className="daily-weather" onClick={() =>chooseDay(i)}>
                        {i === 0
                            ? <span className="weekDay">Today</span>
                            : <span className="weekDay">{day.weekDay}</span>
                        }
                        <div className="hourly-img">
                            <img src={`images/${day.weatherIcon}.svg`} alt="" />
                        </div>
                        <span>Min: {day.minTemp}°</span>
                        <span>Heigh: {day.maxTemp}°</span>
                        <span>Rain: {day.chanseOfRain}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}   