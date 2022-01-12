import Weekly from "./Weekly";

function DailyWeather(props) {
    return (
        <div className="daily-weather">
            <h2>Weekly Forecast</h2>
            <div className="daily-container">
                {props.dailyweather.map((day, i) => {
                    if(i != 0) return (
                        <Weekly key={day.dt} icon={day.weather[0].icon} description={day.weather[0].main} temp={day.temp} timestamp={day.dt}/>
                    )
                }
                )
                }
            </div>
        </div>
    )
}
export default DailyWeather;