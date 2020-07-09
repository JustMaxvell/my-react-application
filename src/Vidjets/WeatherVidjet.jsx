import React from "react";
import axios from "axios";
import moment from "moment";

import { Loader } from "../components/Loader";
import { QuitButton } from "../components/QuitButton";

import "./WeatherVidjet.css";

let latitude;
let longitude;
let weatherAPI;

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(function (position) {
    latitude = Math.floor(position.coords.latitude);
    longitude = Math.floor(position.coords.longitude);
    weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=a2fc937024eb43acbda341e0743ca369`;
    console.log(weatherAPI);
  });
}

getCurrentPosition();

export class WeatherVidjet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let { data: weather } = await axios(weatherAPI);

    this.setState({
      weather: weather,
    });
  }

  componentWillUnmount() {
    this.setState({});
  }

  render() {
    if (!this.state.weather) {
      return <Loader />;
    }
    return (
      <>
        <QuitButton quit={this.props.quit} />
        <div className="weatherVidjet">
          <div
            className="todayWeather"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/img/${this.state.weather.list[0].weather[0].description}.jpg')`,
            }}
          >
            <div className="todayWeather__temp">
              {Math.floor(this.state.weather.list[0].main.temp - 273.15) + "℃"}
            </div>
            <div className="todayWeather__sity">
              {`${this.state.weather.city.name}, ${this.state.weather.city.country}`}
            </div>
            <div className="todayWeather__date">
              {moment(this.state.weather.list[0].dt_txt).format(
                "dddd, MMMM DD"
              )}
            </div>
          </div>
          <div className="weekWeather">
            {this.state.weather.list.map((weather, index) => {
              if (index !== 0 && index % 8 === 0) {
                return (
                  <div key={index} className="day">
                    <div className="day__date">
                      {moment(weather.dt_txt).format("dddd, MMMM DD")}
                    </div>
                    <img
                      src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                      alt="icon"
                    />
                    <div className="day__temp">
                      {Math.floor(weather.main.temp - 273.15) + "℃"}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
