import React from "react";
import InputBar from "./InputBar.js";
import Title from "./Title.js";
import Weather from "./Weather.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      temp: "",
      weather: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const endpoint = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}us&appid=5c66788ef43e098b7eb3046d5ea6fa3f`
    );
    const data = await endpoint.json();
    console.log(data);
    this.setState({
      temp: data.main.temp,
      weather: data.weather[0].main
    });
  }

  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  render() {
    return (
      <div className="title-style">
        <Title />
        <InputBar
          handleChange={this.handleChange}
          getWeather={this.getWeather}
          preventReload={this.preventReload}
          city={this.state.city}
          temp={this.state.temp}
        />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          weather={this.state.weather}
          getWeather={this.getWeather}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
