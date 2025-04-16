import { weatherCodes, weekDays } from "../constants";

export function getWeatherInfo(weatherData, type) {
    const formatedWeatherData = {}
    if (type === 'current') {

        const weatherCode = weatherData.current.condition.code;
        formatedWeatherData.temp = weatherData.current.temp_c
        formatedWeatherData.desciption = weatherData.current.condition.text;
        formatedWeatherData.weatherIcon = getIcon(weatherCode);
        formatedWeatherData.hour = getHour(weatherData.current.last_updated);
    } else if (type === 'forecast') {
        const weatherCode = weatherData.condition.code;
        formatedWeatherData.time = weatherData.time.split(' ')[1].split(':')[0]
        formatedWeatherData.temp = Math.floor(weatherData.temp_c);
        formatedWeatherData.desciption = weatherData.condition.text;
        formatedWeatherData.weatherIcon = getIcon(weatherCode);
        formatedWeatherData.hour = weatherData.time.split(' ')[1].split(':')[0];
    }
    return formatedWeatherData;
}

export function getWeatherInfoFor10Days(weatherData) {
    const formatedWeatherData = weatherData.map(dayForecast => {
        const dayIndex = new Date(dayForecast.date).getDay();
        const dailyWeather = {};
        dailyWeather.weekDay = weekDays[dayIndex];
        dailyWeather.maxTemp = Math.floor(dayForecast.day.maxtemp_c);
        dailyWeather.minTemp = Math.floor(dayForecast.day.mintemp_c);
        dailyWeather.weatherIcon = getIcon(dayForecast.day.condition.code);
        dailyWeather.chanseOfRain = dayForecast.day.daily_chance_of_rain;

        return dailyWeather;
    });
    return formatedWeatherData;
}

export function getWeekDay(dateStr) {
    // const todayIndex = new Date().getDay();
    // const weekDay = weekDays[todayIndex];
    // return weekDay
}

export function getIcon(weatherCode) {
    const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(weatherCode));
    return weatherIcon;
}

export function getHour(date) {
    return date.split(' ')[1].split(':')[0];
}