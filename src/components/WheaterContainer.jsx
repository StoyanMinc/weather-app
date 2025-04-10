import { useEffect, useState } from "react";
import { useGetDefaultForecast } from "../hooks/useWeather";
import CurrentWeather from "./CurrentWheater";
import Forecast24Hours from "./Forecats24Hours";
import Searchbar from "./Searchbar";

export default function WheatherContainer() {
    const defaultForecast = useGetDefaultForecast();

    const [weatherToDisplay, setWeatherToDisplay] = useState({});

    useEffect(() => {
        setWeatherToDisplay(defaultForecast)
    }, [defaultForecast]);
    
    console.log(defaultForecast);
    return (
        <div className="wheater-container">
            <Searchbar setWeather={setWeatherToDisplay} />
            <CurrentWeather weatherForecast={weatherToDisplay} />
            <Forecast24Hours weatherForecast={weatherToDisplay} />
        </div>
    )
}