import React from "react";

class InputBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City" />
      </form>
    );
  }
}

export default InputBar;
