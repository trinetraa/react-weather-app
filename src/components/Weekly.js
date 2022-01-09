import {convertToCelsius, dateTimeConverter, getTodayTomorrow} from "../utilties/converters";

function Weekly (props){
    const getDateTime = dateTimeConverter(props.timestamp);
    return(
                <div className="days">
                    <div className="day">
                        <h4>{getDateTime.date}</h4>
                    </div>
                    <div className="day-icon">
                    <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/>  
                    </div>
                    <div className="day-description">
                        {props.description}
                    </div>
                    <div className= "day-minmax">
                        {convertToCelsius(props.temp.min)}℃ | {convertToCelsius(props.temp.max)}℃
                    </div>
                    
                </div>
    )
}
export default Weekly;