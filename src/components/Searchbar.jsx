import { useState } from "react"
// import { useGetCurrentWeather } from "../hooks/useWeather";
import { getCurrentLocationWeather, getCurrentWeather } from "../weather-api";
import ErrorPage from "./ErrorPage";

export default function Searchbar({ setWeather }) {
    const [searchedCity, setSearchedCity] = useState('Plovdiv');
    const [error, setError] = useState(null);

    // const { getCurrentWeatherHandler } = useGetCurrentWeather();

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                const currentLocationWeather = await getCurrentLocationWeather(latitude, longitude);
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
    }

    const handleSearch = (e) => {
        setSearchedCity(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await getCurrentWeather(searchedCity);
            setWeather(response)
        } catch (error) {
            console.log(error);
            setError(error)            
        }
    }

    if (error !== null) {
        return (
            <ErrorPage/>
        )
    }

    return (
        <div className="searchbar-container">
            <form action="#" onSubmit={submitHandler}>
                <span className="material-symbols-rounded search-span">search</span>
                <input type="search" placeholder="Enter a city name" onChange={handleSearch} value={searchedCity} onClick={() => setSearchedCity('')} />
            </form>
            <button className="my-location-btn" onClick={getPosition} >
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}