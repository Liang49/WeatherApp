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
          type="text"
          name="city"
          placeholder="City"
        />
        <input type="text" name="country" placeholder="Country" />
        <button>Find</button>
      </form>
    );
  }
}

export default InputBar;
