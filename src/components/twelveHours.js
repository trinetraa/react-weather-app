import {convertToCelsius, dateTimeConverter, getTodayTomorrow} from "../utilties/converters"

function TwelveHours (props){
    return (
        <div className="twelve-hours">
            <div className="twelve-dnt">
                {getTodayTomorrow(dateTimeConverter(props.timestamp).date)}
            </div>
            <div className="twelve-dnt">
              {dateTimeConverter(props.timestamp).time}  
            </div>
            <div className="twelve-icon">
                <img src={`http://openweathermap.org/img/wn/${props.icon}.png`}/>
            </div>
            <div className="twelve-description">
                {props.description}
            </div>
            <div className="twelve-temp">
                {convertToCelsius(props.temp)}℃
            </div>
        </div>
    )
}

export default TwelveHours;