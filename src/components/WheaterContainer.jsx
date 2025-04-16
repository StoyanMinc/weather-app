import { useEffect, useState } from "react";
import { useGetDefaultForecast } from "../hooks/useWeather";
import CurrentWeather from "./CurrentWheater";
import Forecast24Hours from "./Forecats24Hours";
import Searchbar from "./Searchbar";
import { getWeatherInfo } from "../utils/getWeatherInfo";
import Forecast10Days from "./Forecast10Days";

export default function WheatherContainer() {
    const defaultForecast = useGetDefaultForecast();
    const [weatherToDisplay, setWeatherToDisplay] = useState({});

    useEffect(() => {
        setWeatherToDisplay(defaultForecast)
    }, [defaultForecast]);
    
    if (!weatherToDisplay.current) {
        return (
            <div>Loading...</div>
        )
    }
    const weatherInfo = getWeatherInfo(weatherToDisplay, 'current');
    
    return (
        <div className="wheater-container">
            <Searchbar setWeather={setWeatherToDisplay} />
            <CurrentWeather weatherInfo={weatherInfo} />
            <Forecast24Hours weatherForecast={weatherToDisplay.forecast.forecastday} />
            <Forecast10Days weatherToDisplay={weatherToDisplay}/>
        </div>
    )
};