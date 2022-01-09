import {convertToCelsius} from "../utilties/converters";

function CurrentWeather(props){

    return(
        <div className="current-weather">
            <h2>Today's Weather</h2>
            <div className="curr-container">
                <div className="curr-icon">
                    <img src={`http://openweathermap.org/img/wn/${props.currweather.weather[0].icon}@4x.png`}/>
                </div>
                <div className="description">
                {props.currweather.weather[0].main}
                </div>
                <div className="temperature">
                Feels Like: {convertToCelsius(props.currweather.feels_like)} ℃ 
                </div>
                <div className="temperature">
                Temperature: {convertToCelsius(props.currweather.temp)} ℃
                </div>
                <div className="otherData">
                    <div className="otherDataChildren">
                    Humidity: {props.currweather.humidity}
                    </div>
                    <div className="otherDataChildren">
                    Pressure: {Math.round(((props.currweather.pressure)/1013)*100)/100} atm
                    </div>
                    <div className="otherDataChildren">
                    Winds: {props.currweather.wind_speed} km/ph
                    </div>
                    <div className="otherDataChildren">
                    Visibility: {props.currweather.visibility}
                    </div>
            </div>
        </div>
        </div>
    )
}
export default CurrentWeather;