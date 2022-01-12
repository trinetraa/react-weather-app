import {useState} from "react";

function Header(props){
    const [searchVal, setSearchVal] = useState("");
    const handleChange = (event)=>{
        setSearchVal(event.target.value);
    }

    const handleSearch = (e)=>{
        props.search(searchVal)
    }
    return(
        <div className="header">
            <div className="title">
                <h1>Weather App</h1>
            </div>
            <div className="search-bar">
                <input value={searchVal} onChange={handleChange} placeholder="Search..."></input>
                <button onClick={handleSearch}>🔍</button>
            </div>
        </div>
    )
}


//icon, main, feels_like, temp, humidity, pressure, wind_speed, visibility

export default Header;