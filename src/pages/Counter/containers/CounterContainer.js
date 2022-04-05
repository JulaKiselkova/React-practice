// import React, { Component } from "react";
import { Component } from "react";
import CounterView from "../components/CounterView";

//export const borderColor = "mediumpurple";

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      const parityType = this.state.countValue % 2 === 0 ? "even" : "odd";
      this.setState({ parityType });
    }
  }

  handleDecrement = () => {
    this.setState((state) => {
      if (this.state.countValue > 0) {
        return {
          countValue: this.state.countValue - 1,
        };
      }
    });
  };
  handleIncrement = () => {
    this.setState((state) => {
      return {
        countValue: this.state.countValue + 1,
      };
    });
  };

  handleReset = () => {
    this.setState((state) => {
      return {
        countValue: 0,
      };
    });
  };
  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}
        parityType={this.state.parityType}
      />
    );
  }
}
