import React, { Component } from 'react';
import CalculatorStringChecker from './lib/calculator_string_checker.js';
import CalculatorStringToRequestEncoder from './lib/calculator_string_to_request_encoder.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.stringChecker = new CalculatorStringChecker();

    this.state = {
      text: '0',
      last_operation_str: 'Enter first operation:'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  render() {
    return (
      <div className="CalculatorWrapper">
        <h3>Simple Calculator based on Ethereum Blockchain</h3>
        <form onClick={this.handleSubmit}>
          <div className="inputWrapper">
            <div className="last_operation">
              {this.state.last_operation_str}
            </div>
            <input
              id="calculator-input"
              autoFocus
              onChange={this.handleChange}
              value={this.state.text}
              autoComplete="off"
            />
          </div>
          <div className="buttonsWrapper">
            <div onClick={this.handleClear} className="buttonWrapper">
              <button type="button">C</button>
            </div>
            <div className="buttonWrapper">
              <button>=</button>
            </div>
          </div>
        </form>
        <h3>Features:</h3>
        <ul>
          <li>can do simple operations such as <b>+</b>, <b>-</b>, <b>*</b>, <b>/</b></li>
          <li>
            all calculations are done on the <a href="https://ropsten.etherscan.io/address/0x6eab7a2d1f06dceca1bfe23788f4d0152f356f45" target="_blank">
              contract
            </a> with <a href ="/SimpleCalculator.sol" target="_blank">
              source code
            </a> located in Ropsten test network via Infura API
          </li>
          <li>
            numbers are limited by 3 digits after a point, and can contain only 12 digits before
          </li>
          <li>
            operations history is not saved in blockchain yet
          </li>
          <li>Front-end based on React</li>
          <li>Back-end based on Node.js</li>
        </ul>
        <div>Author: Sergey Borodanov</div>
        <div>Last update: March 23, 2019</div>
      </div>
    );
  }

  handleChange(e) {
    e.target.value = this.stringChecker.sanity(e.target.value)

    if ( this.stringChecker.check_on_input(e.target.value) ) {
      this.setState({ text: e.target.value });
    }
  }

  handleClear(e) {
    e.preventDefault();

    this.setState( () => ({
      text: '0'
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    if ( this.state.text === "0" ) {
      return null;
    }

    if ( /\/0$/.test(this.state.text) ) {
      this.setState((state) => ({
        last_operation_str: state.text,
        text: "Infinity"
      }));
      return null;
    }

    if ( !this.stringChecker.check_on_handle(this.state.text) ) {
      return null;
    }

    let stringToRequestEncoder = new CalculatorStringToRequestEncoder()
    stringToRequestEncoder.encode_and_request(this.state.text)
      .then( (resp) => {
        this.setState( (state) => ({
          last_operation_str: state.text,
          text: resp.result
        }))
      })
  }
}

export default App;
