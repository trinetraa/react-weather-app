import React, { Component } from "react";
import CurrentWeather from "./current-weather";
import DailyWeather from "./daily-weather";
import HourWeather from "./hourly-weather";

class weather extends Component {
    
    async getWeather(lat, long) {
            const key = "6d1b67f5e9541101ce7b395acb1ec866";   
            try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}`);
            const weatherResult = await response.json();
            this.setState = Object.assign({}, this.state, {weather: weatherResult});
            }
            catch(e){
                alert("Unable to retreive values right now. Please try again later.");
            }

        
    }
    //step3 a method to retreive location from browser using GeoLocation API
     getLocation() {
    //navigator = interface representing state and identity of user
    //geolocation = API returning accessing location of device 
        if (navigator.geolocation) {
    //getCurrentPosition is a predefined method (promise like) in geolocation API that takes in two functions as a parameter - one to run on success on on failure
          navigator.geolocation.getCurrentPosition((position)=> {
              //calling getWeather function within getCurrentPOsition to get weather.
              //It takes in latitude and longitude as parameters
                this.getWeather(position.coords.latitude, position.coords.longitude);
          }, (err)=> {
              console.log(err);
          }); //catching and printing error in case of failure for our personal use and understanding
        } else { 
           alert("Geolocation is not supported by this browser.");
           //popup to be displayed in case location not retreived successfully
        }
      }
    //step2 - we create a constructor to create a state that will contain our weather object which should be updated constantly acc to time and location. 
      constructor(){
        super();
        this.state = {
            weather: {}
        }
    }
    //step1 - we create basic boilerplate and render component to render a background where we'll display stuff
    render(){
       this.getLocation();
        return(
            <div>
                <CurrentWeather/>
                <HourWeather/>
                <DailyWeather/>
            </div>
        );
    }
}

export default weather;