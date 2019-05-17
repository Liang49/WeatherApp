import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}> Click me</button>
        <h2>{this.props.city}</h2>
        <h2>Temperature: {this.props.temp}</h2>
        <h2>Weather: {this.props.weather}</h2>
      </div>
    );
  }
}

export default Weather;
