import {convertToCelsius} from "../utilties/converters";

function CurrentWeather(props){
    return(
        <div className="current-weather">
            <h2>Today's Weather</h2>
            <div className="curr-container">
                <div className="curr-icon">
                    <img src={`http://openweathermap.org/img/wn/${props.currweather.weather[0].icon}@2x.png`}/>
                </div>
                <div className="description">
                <h2>{props.currweather.weather[0].main}</h2>
                </div>
                <div className="temperature">
                <h4>Feels Like: {convertToCelsius(props.currweather.feels_like)} ℃</h4> 
                </div>
                <div className="temperature">
                <h4>Temperature: {convertToCelsius(props.currweather.temp)} ℃</h4>
                </div>
                <div className="other-data">
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