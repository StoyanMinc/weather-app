import { useState } from "react"
import { useGetCurrentWeather } from "../hooks/useWeather";
import { getCurrentLocationWeather } from "../weather-api";

export default function Searchbar({ setWeather }) {
    const { getCurrentWeatherHandler } = useGetCurrentWeather();
    const [searchedCity, setSearchedCity] = useState('Plovdiv');

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                const currentLocationWeather = await getCurrentLocationWeather(latitude, longitude);
                console.log(currentLocationWeather);
                setWeather(currentLocationWeather);
                setSearchedCity(currentLocationWeather.location.name);
            } catch (error) {
                console.log(error);
            }
        }, (error) => {
            console.log(error);
        },
            // {
            //     enableHighAccuracy: false,
            //     timeout: 60000,        // wait up to 1 minute
            //     maximumAge: 300000 
            // }
        );
        console.log('clicked');
    }

    const handleSearch = (e) => {
        setSearchedCity(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const currentWeather = await getCurrentWeatherHandler(searchedCity);
        setWeather(currentWeather)
    }

    return (
        <div className="searchbar-container">
            <form action="#" onSubmit={submitHandler}>
                <span className="material-symbols-rounded search-span">search</span>
                <input type="search" placeholder="Enter a city name" onChange={handleSearch} value={searchedCity} />
            </form>
            <button className="my-location-btn" onClick={getPosition} >
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}