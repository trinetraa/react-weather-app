import Header from "./Header";
import { useState, useEffect } from "react";
import SearchWeather from "./searchWeather";


function Weather() {
    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState("");
    const [isCity, setIsCity] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [finalWeather, setFinalWeather] = useState({});
    useEffect(() => {
        if (!isCity) {
            setFinalWeather(weather[0]);
        }
        else {
            setFinalWeather(weather);
        }
    }, [weather, isLoaded, isCity])
    

    useEffect(() => {
        getLocation();
    }, []);

    const getWeather = async (lat, long) => {
        setIsLoaded(false);
        setIsCity(false);
        const key = "6d1b67f5e9541101ce7b395acb1ec866";
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}`);
            const weatherResult = [];
            weatherResult.push(await response.json());
            setWeather(weatherResult);
            setIsLoaded(true);
        }
        catch (e) {
            alert(`Error ${e} 
            Unable to retreive values right now. Please try again later.`);
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
                alert(`Error ${err}
                Unable to retreive values right now. Please try again later.`);
                }); //catching and printing error in case of failure for our personal use and understanding
        } else {
            alert("Geolocation is not supported by this browser.");
            //popup to be displayed in case location not retreived successfully
        }
    }

    const searchWeatherCall = async (val) => {
        setIsCity(true);
        setIsLoaded(false);
        try {
            const key = "6d1b67f5e9541101ce7b395acb1ec866"
            const searchResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${key}`);
            const searchWeatherResult = await searchResponse.json();
            const currSearchedWeather = {
                weather: searchWeatherResult.weather,
                feels_like: searchWeatherResult.main.feels_like,
                temp: searchWeatherResult.main.temp,
                humidity: searchWeatherResult.main.humidity,
                pressure: searchWeatherResult.main.pressure,
                visibility: searchWeatherResult.sys.visibility,
                wind_speed: searchWeatherResult.wind.speed
            }
            setCityName(val)
            setWeather(currSearchedWeather);
            setIsLoaded(true);
        }
        catch (e) {
            alert(`Error: ${e}`);
        }
    }

    if (isLoaded) {
        return (
            <>
            <Header search={searchWeatherCall} />
            <SearchWeather finalWeather={finalWeather} isCity={isCity} cityName={cityName}/>
            </>
            );
    }
    else return (
        <div className="weather">
            Loading...
        </div>
    )
}

export default Weather;