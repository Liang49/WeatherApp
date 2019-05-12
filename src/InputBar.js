import React from "react";

class InputBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button>Find</button>
      </form>
    );
  }
}

export default InputBar;
