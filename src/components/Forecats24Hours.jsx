import { getWeatherInfo } from "../utils/getWeatherInfo";

export default function Forecast24Hours({ weatherForecast }) {
    const hourlyWeatherData = [...weatherForecast[0].hour, ...weatherForecast[1].hour];


    const now = Date.now() / 1000;
    const next24h = now + 24 * 60 * 60;
    const next24hWeatherData = hourlyWeatherData.filter(item => 
        item.time_epoch > now && item.time_epoch <= next24h
    )

    
    const formatedHourlyWeatherInfo = next24hWeatherData.map(h => {
        return getWeatherInfo(h, 'forecast');
    });


   
    return (
        <div className="forecast-container">
            {formatedHourlyWeatherInfo.map((h, i) =>
            (<div key={i} className="forecast-hourly-container">
                <p>{h.time}</p>
                <div className="hourly-img">
                    <img src={`images/${h.weatherIcon}.svg`} alt="" />
                </div>
                <p>{h.temp}°</p>
            </div>)
            )}
        </div>
    )
}