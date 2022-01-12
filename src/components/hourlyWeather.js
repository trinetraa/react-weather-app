import {useState, useEffect} from "react";
import TwelveHours from "./twelveHours";

function HourlyWeather(props){
    const [pageNo, setPageNo] = useState(1);
    const [hourlyDisplay, setHourlyDisplay] = useState([]);
    useEffect(() => {
        let newArray = [];
        newArray = props.hourlyweather.filter((el, i)=>{
            return (i >= (pageNo - 1)*12 && i < pageNo*12)
        })
        setHourlyDisplay(newArray);
        return ()=>{
            setHourlyDisplay([]);
        }
    }, [pageNo])

    const prevPage = ()=>{
        if(pageNo>1) setPageNo(pageNo-1)
    }

    const nextPage = ()=>{
        if(pageNo<4) setPageNo(pageNo+1);
    }
    
    if(hourlyDisplay.length > 0){
        return(
            <div className="hourly-container">
                <h2>Hourly Forecast</h2>
            <div className="hourly-weather">
              <button className="btn prev" onClick={prevPage}>◀</button>
              <div className="hourly-display">
                  {
                      hourlyDisplay.map((hour)=>{
                        return (<TwelveHours key={hour.dt} timestamp={hour.dt} icon={hour.weather[0].icon} description={hour.weather[0].main} temp={hour.temp}/>)
                      })
                      }
              </div>
              <button className="btn next" onClick={nextPage}>▶</button>
    
            </div>
            </div>
        )
    }

    else return (<div>Loading...</div>)
    
}
export default HourlyWeather;

/*


Pg No. 1 - show 0-11
Pg 2 - show 12-23
pg 3 - show 24-35
pg 4 - 36-47


*/