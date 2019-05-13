import React from "react";
import InputBar from "./InputBar.js";
import Title from "./Title.js";
import Weather from "./Weather.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Brooklyn",
      country: "United States",
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather(e) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5c66788ef43e098b7eb3046d5ea6fa3f"
    ).then(x => {
      console.log(x);
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
        <InputBar getWeather={this.getWeather} />
        <Weather city={this.state.city} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
