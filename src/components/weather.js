import CurrentWeather from "./currentWeather";
import DailyWeather from "./dailyWeather";
import HourlyWeather from "./hourlyWeather";
import { useState, useEffect } from "react";


function Weather() {
    const [weather, setWeather] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getLocation();
    }, []);

    const getWeather = async (lat, long) => {
        const key = "6d1b67f5e9541101ce7b395acb1ec866";
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}`);
            const weatherResult = [];
            weatherResult.push(await response.json());
            setWeather(weatherResult);
            setIsLoaded(true);
        }
        catch (e) {
            alert("Unable to retreive values right now. Please try again later.");
            console.log(e);
        }
    }
    
    const getLocation = () => {
        //navigator = interface representing state and identity of user
        //geolocation = API returning accessing location of device 
        if (navigator.geolocation) {
            //getCurrentPosition is a predefined method (promise like) in geolocation API that takes in two functions as a parameter - one to run on success on on failure
            navigator.geolocation.getCurrentPosition((position) => {
                //calling getWeather function within getCurrentPOsition to get weather.
                //It takes in latitude and longitude as parameters
                getWeather(position.coords.latitude, position.coords.longitude);
            }, (err) => {
                console.log(err);
            }); //catching and printing error in case of failure for our personal use and understanding
        } else {
            alert("Geolocation is not supported by this browser.");
            //popup to be displayed in case location not retreived successfully
        }
    }
    console.log(weather);
    if(isLoaded){
        return (
            <div className="weather">
                weather
                <CurrentWeather currweather = {weather[0].current} />
                <DailyWeather dailyweather={weather[0].daily}/>
                <HourlyWeather hourlyweather={weather[0].hourly}/>
            </div>
        );
    }
    else return (
        <div>
            Loading...
        </div>
    )
}

export default Weather;