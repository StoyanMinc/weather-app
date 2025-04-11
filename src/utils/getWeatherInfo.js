import { weatherCodes } from "../constants";

export function getWeatherInfo(weatherData, type) {
    const formatedWeatherData = {}
    if(type === 'current') {
        const weatherCode = weatherData.current.condition.code;
        formatedWeatherData.temp = weatherData.current.temp_c
        formatedWeatherData.desciption = weatherData.current.condition.text;
        formatedWeatherData.weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(weatherCode));
    } else if (type === 'forecast') {
        const weatherCode = weatherData.condition.code;
        formatedWeatherData.time = weatherData.time.split(' ')[1].split(':')[0]
        formatedWeatherData.temp = Math.floor(weatherData.temp_c);
        formatedWeatherData.desciption = weatherData.condition.text;
        formatedWeatherData.weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(weatherCode));
    }
        return formatedWeatherData;
}