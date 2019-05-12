import React from "react";
import InputBar from "./InputBar.js";
import Title from "./Title.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      City: "Brooklyn",
      Country: "United States"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      City: "Queens"
    });
  }
  render() {
    return (
      <div>
        <Title />
        <InputBar onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
