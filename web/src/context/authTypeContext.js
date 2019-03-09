import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    type: "signup"
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeState: type =>
            this.setState({
              type
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
