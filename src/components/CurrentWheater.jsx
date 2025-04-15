export default function CurrentWeather({ weatherInfo }) {
    return (
        <div className="current-weather-container">
            <div className="img-container">
                {weatherInfo.hour > 6 && weatherInfo.hour < 20
                    ? <img className="current-weather-img" src={`images/${weatherInfo.weatherIcon}.svg`} alt="whater-image" />
                    : <img className="current-weather-img" src={`images/${weatherInfo.weatherIcon}-night.svg`} alt="whater-image" />
                }
            </div>
            <div className="current-weather-info">
                <h1>{weatherInfo.temp} <span>°C</span></h1>
                <p>{weatherInfo.desciption}</p>
            </div>
        </div>
    )
}