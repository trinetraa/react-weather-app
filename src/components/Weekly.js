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
                        <h4>{props.description}</h4>
                    </div>
                    <div className= "day-description">
                        <h4>{convertToCelsius(props.temp.min)}℃ | {convertToCelsius(props.temp.max)}℃</h4>
                    </div>
                    <div className="day-info-container">
                        <div className="day-info">
                            Morning: {convertToCelsius(props.temp.morn)}℃ 
                        </div>
                        <div className="day-info">
                            Afternoon: {convertToCelsius(props.temp.day)}℃ 
                        </div>
                        <div className="day-info">
                            Evening: {convertToCelsius(props.temp.eve)}℃ 
                        </div>
                        <div className="day-info">
                            Night: {convertToCelsius(props.temp.night)}℃ 
                        </div>
                    </div>
                </div>
    )
}
export default Weekly;