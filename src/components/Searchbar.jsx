import { useState } from "react"
import { useGetCurrentWeather } from "../hooks/useWeather";

export default function Searchbar({ setWeather }) {
    const { getCurrentWeatherHandler } = useGetCurrentWeather();
    const [searchedCity, setSearchedCity] = useState('Plovdiv');

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
                <input type="search" placeholder="Enter a city name" onChange={handleSearch} defaultValue={'Plovdiv'} />
            </form>
            <button className="my-location-btn">
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}