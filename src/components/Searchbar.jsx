export default function Searchbar() {
    return (
        <div className="searchbar-container">
            <span className="material-symbols-rounded search-span">search</span>
            <input type="search" placeholder="Enter a city name" />
            <button className="my-location-btn">
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}