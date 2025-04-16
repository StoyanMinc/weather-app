import { getWeatherInfo, getIcon, getHour } from "../utils/getWeatherInfo";

export default function WeatherDetails({weatherToDisplay, i,setDayIndex}) {
    const city = weatherToDisplay.location.name;
    const date = weatherToDisplay.forecast.forecastday[i].date;
    const description = weatherToDisplay.forecast.forecastday[i].day.condition.text;
    const maxTemp = Math.floor(weatherToDisplay.forecast.forecastday[i].day.maxtemp_c);
    const minTemp = Math.floor(weatherToDisplay.forecast.forecastday[i].day.mintemp_c);
    const icon = getIcon(weatherToDisplay.forecast.forecastday[i].day.condition.code);
    const formated24hForcast = weatherToDisplay.forecast.forecastday[i].hour.map((h) => getWeatherInfo(h, 'forecast'));
    const hour = getHour(weatherToDisplay.current.last_updated);
    const chanseOfRain = weatherToDisplay.forecast.forecastday[i].day.daily_chance_of_rain;

    return( 
        <div className="weather-details-container">
            <div className="close-details" onClick={() => setDayIndex(null)}></div>
            <h1>{city}</h1>
            <p>{date}</p>
            <div className="img-container">
                {hour > 6 && hour < 20
                    ? <img className="current-weather-img" src={`images/${icon}.svg`} alt="whater-image" />
                    : <img className="current-weather-img" src={`images/${icon}-night.svg`} alt="whater-image" />
                }
            </div>
            <div className="current-weather-info">
                <p>{description}</p>
                <div className="temp">
                    <span>min: {minTemp}°</span>
                    <span>max: {maxTemp}°</span>
                    <div className="chance-of-rain-holder">
                    <img className="rain-percent" src='images/rain.svg'></img> 
                    <span>{chanseOfRain}%</span>
                    </div>
                </div>
            </div>
            <div className="forecast-container">
            <p>24h forecast</p>
            <div className="hourly-weather-container">
                {formated24hForcast.map((h, i) =>
                (<div key={i} className="each-hour-container">
                    <p>{h.time}</p>
                    <div className="hourly-img">
                        {h.time > 6 && h.time < 20
                            ? <img src={`images/${h.weatherIcon}.svg`} alt="" />
                            : <img src={`images/${h.weatherIcon}-night.svg`} alt="" />
                        }
                    </div>
                    <p>{h.temp}°</p>
                </div>)
                )}
            </div>
        </div>
        </div>
    )
}