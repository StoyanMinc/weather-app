import CurrentWeather from "./CurrentWheater";
import Forecast24Hours from "./Forecats24Hours";
import Searchbar from "./Searchbar";

export default function WheatherContainer() {
    return (
        <div className="wheater-container">
            <Searchbar />
            <CurrentWeather />
            <Forecast24Hours/>
        </div>
    )
}