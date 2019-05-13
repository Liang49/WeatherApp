import React from "react";
import InputBar from "./InputBar.js";
import Title from "./Title.js";
import Weather from "./Weather.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Brooklyn",
      country: "United States"
    };
    this.handleClick = this.handleClick.bind(this);
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
        <InputBar />
        <Weather city={this.state.city} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
