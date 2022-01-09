import Weekly from "./Weekly";

function DailyWeather(props) {
    console.log(props.dailyweather);
    console.log(props.dailyweather[1].weather[0].icon)
    return (
        <div className="daily-weather">
            <h2>Weekly Forecast</h2>
            <div className="daily-container">
                {props.dailyweather.map((day) => {
                    return (
                        <Weekly icon={day.weather[0].icon} description={day.weather[0].description} temp={day.temp} timestamp={day.dt}/>
                    )
                }
                )
                }
            </div>
        </div>
    )
}
export default DailyWeather;