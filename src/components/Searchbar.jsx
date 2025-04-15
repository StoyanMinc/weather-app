import { useRef, useState } from "react"

import { getCurrentLocationWeather, getCurrentWeather } from "../weather-api";
import ErrorPageModal from "./ErrorPage";

export default function Searchbar({ setWeather }) {
    const [searchedCity, setSearchedCity] = useState('Plovdiv');
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    const lastValidCity = useRef('Plovdiv');

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
        });
    }

    const handleSearch = (e) => {
        setSearchedCity(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await getCurrentWeather(searchedCity);
            setWeather(response);
            lastValidCity.current = searchedCity;
            inputRef.current.blur();
        } catch (error) {
            console.log(error);
            setError(error)
        }
    }

    function clearError() {
        setError(null);
        setSearchedCity(lastValidCity.current);
    }

    if (error !== null) {
        return (
            <ErrorPageModal clearError={clearError} error={error} />
        )
    }
    return (
        <div className="searchbar-container">
            <form action="#" onSubmit={submitHandler}>
                <span className="material-symbols-rounded search-span">search</span>
                <input ref={inputRef} type="search" placeholder="Enter a city name" onChange={handleSearch} value={searchedCity} onClick={() => setSearchedCity('')} />
            </form>
            <button className="my-location-btn" onClick={getPosition} >
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}