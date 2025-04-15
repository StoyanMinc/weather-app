import { getWeatherInfoFor10Days } from "../utils/getWeatherInfo"

export default function Forecast10Days({ weatherForecast }) {
    const formatedWeather = getWeatherInfoFor10Days(weatherForecast);
    return (
        <div className="tendays-forecast-container">
            <p>10 days forecast</p>
            <div className="tenDays-foracast-holder">
                {formatedWeather.map((day, i) => (
                    <div key={i} className="daily-weather">
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