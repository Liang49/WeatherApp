import React from "react";
import InputBar from "./InputBar.js";
import Title from "./Title.js";
import Weather from "./Weather.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Brooklyn",
      country: "us",
      temp: "0"
    };
    this.handleClick = this.handleClick.bind(this);
    this.preventReload = this.preventReload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(event) {
    this.getWeather();
  }
  preventReload(event) {
    event.preventDefault();
  }

  getWeather(event) {
    const { city } = this.state;

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=5c66788ef43e098b7eb3046d5ea6fa3f`;

    fetch(endpoint).then(x => {
      x.json().then(y => {
        console.log(y);
        this.setState({
          temp: y.main.temp,
          city: event.target.value
        });
      });
    });
  }
  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  handleClick() {
    this.setState({
      city: "Queens"
    });
  }
  render() {
    return (
      <div>
        <Title />
        <InputBar
          handleChange={this.handleChange}
          getWeather={this.getWeather}
          preventReload={this.preventReload}
          city={this.state.city}
        />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
