import { useEffect, useRef } from "react";
import { getWeatherInfo } from "../utils/getWeatherInfo";

export default function Forecast24Hours({ weatherForecast }) {
    const containerRef = useRef(null);
    const hourlyWeatherData = [...weatherForecast[0].hour, ...weatherForecast[1].hour];
    const now = Date.now() / 1000;
    const next24h = now + 24 * 60 * 60;
    const next24hWeatherData = hourlyWeatherData.filter(item =>
        item.time_epoch > now && item.time_epoch <= next24h
    )

    const formatedHourlyWeatherInfo = next24hWeatherData.map(h => {
        return getWeatherInfo(h, 'forecast');
    });

    useEffect(() => {
        containerRef.current.scrollLeft = 0
    },[formatedHourlyWeatherInfo]);

    return (
        <div className="forecast-container">
            <p>24h forecast</p>
            <div ref={containerRef} className="hourly-weather-container">
                {formatedHourlyWeatherInfo.map((h, i) =>
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
    )
}