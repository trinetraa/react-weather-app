export const convertToCelsius = (temp)=>{
    return Math.round(((temp - 273.15)*100))/100;
}

export const dateTimeConverter = (unix_timestamp)=>{
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(unix_timestamp*1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
let formattedTime = hours + ':' + minutes.substr(-2);

let day = date.getDate();
let month = date.getMonth()+1;

let formattedDate = `${day}/${month}`;
const dateTime = {
   time: formattedTime,
   date: formattedDate
};
return dateTime;
}

export const getTodayTomorrow = (date)=>{
    let currentDate = new Date();
    //gets the current timestamp from your system
    if(date.indexOf(currentDate.getDate())==0) return "Today";
    else return "Tomorrow";
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }