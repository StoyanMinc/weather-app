const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`

export async function getDefaultForecast() {
    const response = await fetch(`${BASE_URL}&q=Plovdiv&days=10`);
    const data = await response.json();
    return data;
}

export async function getCurrentWeather(city) {
    const response = await fetch(`${BASE_URL}&q=${city}&days=10`);
    if(response.status !== 200) {
        const error = response.json();
        throw new Error(error);
    }
    const data = await response.json();
    
    return data;
}

export async function getCurrentLocationWeather(lat, long) {
    const response = await fetch(`${BASE_URL}&q=${lat},${long}&days=10`);
    const data = await response.json();
    return data;
}