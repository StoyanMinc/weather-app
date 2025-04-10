const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1/'

export async function getDefaulWeather() {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=Plovdiv`);
    const data = await response.json();
    return data;
};

export async function getDefaultForecast() {
    const response = await fetch(`${BASE_URL}forecast.json?key=${API_KEY}&q=Plovdiv&days=2`);
    const data = await response.json();
    return data;
}

export async function getCurrentWeather(city) {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&days=2`);
    const data = await response.json();
    return data;
}