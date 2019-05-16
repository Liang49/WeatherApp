import React from "react";

class InputBar extends React.Component {
  render() {
    return (
      <form
        onSubmit={this.props.getWeather}
        onClick={this.props.preventReload}
        onChange={this.handleChange}
      >
        <input
          onChange={this.props.handleChange}
          city={this.props.city}
          type="text"
          name="city"
          placeholder="City"
          temp={this.props.temp}
        />
        <input type="text" name="country" placeholder="Country" />
        <button>Find</button>
      </form>
    );
  }
}

export default InputBar;
