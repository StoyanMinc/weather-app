export default function CurrentWeather() {
    return( 
        <div className="current-weather-container">
            <div className="img-container">
            <img className="current-weather-img" src="images/cloudy.svg" alt="whater-image" />
            </div>
            <div className="current-weather-info">
                <h1>30 <span>°C</span></h1>
                <p>mist</p>
            </div>
        </div>
    )
}