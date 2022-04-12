// import React, { Component } from "react";
import { Component } from "react";
import CounterView from "../components/CounterView";

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      const parityType = this.state.countValue % 2 === 0 ? "even" : "odd";
      this.setState({ parityType });
    }
  }

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
    }
  };

  handleSetId = () => {
    this.state.id = Math.random().toString(36).substring(2, 9);
    const id = this.state.id;
    this.setState({ id: this.state.id });
  };

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
    console.log(this.state.countValue + 1);
    console.log(this.state.id);
  };

  handleReset = () => {
    // this.setState((state) => {
    //   return {
    //     countValue: 0,
    //   };
    // });
    this.setState({ countValue: 0 });
  };
  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}
      />
    );
  }
}
