import { useState, useEffect } from "react";
import { getCurrentWeather, getDefaultForecast, getDefaulWeather } from "../weather-api";

export function useGetDefaultWeather() {
    const [defaultWeather, setDefaultWeather] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getDefaulWeather();
            setDefaultWeather(result);
        })()
    }, []);

    return defaultWeather;
}

export function useGetDefaultForecast() {
    const [defaultForecast, setDefaultForecast] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getDefaultForecast();
            setDefaultForecast(result);
        })()
    }, []);

    return defaultForecast;
}

export function useGetCurrentWeather() {
    const getCurrentWeatherHandler = async (city) => {
        const result = await getCurrentWeather(city);
        return result;
    }

    return { getCurrentWeatherHandler };
}