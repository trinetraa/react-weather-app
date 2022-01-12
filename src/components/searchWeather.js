import { capitalizeFirstLetter } from "../utilties/converters"
import CurrentWeather from "./currentWeather"
import DailyWeather from "./dailyWeather"
import HourlyWeather from "./hourlyWeather"

export default function SearchWeather(props){
    if(props.isCity) {
        return(
            <div className="weather">
                    <div className="city-name">
                    <h2>{capitalizeFirstLetter(props.cityName)}</h2>  
                    </div>
                    <CurrentWeather currweather = {props.finalWeather} />
                    <div className="Disclaimer">
                        To view detailed current, hourly and weekly weather forecast enable location.
                    </div>
            </div>
        )
    }
    else{
       return(
        <div className="weather">
            <CurrentWeather currweather = {props.finalWeather.current} />
            <HourlyWeather hourlyweather={props.finalWeather.hourly}/>
            <DailyWeather dailyweather={props.finalWeather.daily}/>
    </div>
       ) 
    }
    
}