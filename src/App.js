import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Button from './Component/Button';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringValue: "0",
      numberClicked: false,
      error: false
    }
  }

  handleClick = (ev) => {
    ev.persist();
    this.state.stringValue !== "0" ?
      (!this.state.numberClicked && ev.target.dataset.type === "operator") ? // Something Like This: +-
        this.setState({ error: true })
        :
        this.setState({
          /* Something Like This: +1 => ( '+' is Previous Character And Determinate numberClicked true or false
          And '1' is Preset Charcter That Determinate dataset.type number or Operator ) */
          /* Or 25- => ( '5' is Previous Character And Determinate numberClicked true or false
          And '-' is Preset Charcter That Determinate dataset.type number or Operator ) */
          stringValue: this.state.stringValue + ev.target.value,
          error: false,
          numberClicked: ev.target.dataset.type === "operator" ? false : true
        })
      :
      ev.target.dataset.type === "number" ?
        this.setState({ stringValue: ev.target.value, numberClicked: true })
        :
        this.setState({ error: true })
  }

  handleSpecialClick = (ev) => {
    ev.persist();
    switch (ev.target.dataset.type) {
      case "backspace": {
        let value = this.state.stringValue;
        this.setState({
          stringValue: value.substring(0, value.length - 1) !== "" ? value.substring(0, value.length - 1) : "0",
          numberClicked: isNaN(Number(value[value.length - 2])) ? false : true,
          error: false
          // IsNaN(45) => return false
          // IsNaN('+') => return true
          // IsNaN('4+5') => return true
          // Number(4+5) => return 9
          // Number('4+5') => return NaN
        });
        break;
      }
      case "clear": {
        this.setState({ stringValue: "0", error: false });
        break;
      }
      case "calculate": {
        this.state.numberClicked ?
          // The Important Thing That is You Should Use toString() Method!
          // Try Remove it And You Will Face with Bug in getLastNumber() Function
          // For Example
          // Type 23+32
          // Press '='
          // Press 'X^2'
          this.setState({ stringValue: eval(this.state.stringValue).toString() })
          :
          this.setState({ error: true })
        break;
      }
      case "power2": {
        this.state.numberClicked ?
          this.setState({ stringValue: this.state.stringValue + "*" + this.getLastNumber().number })
          :
          this.setState({ error: true })
        break;
      }
      case "sqrt": {
        this.state.numberClicked ?
          this.setState({
            stringValue: this.state.stringValue.substring(0, this.getLastNumber().index) + Math.sqrt(Number(this.getLastNumber().number)).toFixed(2)
          })
          :
          this.setState({ error: true })
        break;
      }
      default: break;
    }
  }

  getLastNumber = () => {
    let value = this.state.stringValue;
    let subString = "";
    let length = this.state.stringValue.length;
    let index;
    for (let i = length - 1; i >= 0; i--) {
      if (value[i] === '+' || value[i] === '-' || value[i] === '*' || value[i] === '/') {
        break;
      }
      subString += value[i];
      index = i;
    }
    return ({ number: subString.split("").reverse().join(""), index: index });
  }

  render = () =>
    <React.Fragment>
      <div className="row">
        <div className="col-1 col-md-3 col-lg-4"></div>
        <div className="col-10 col-md-6 col-lg-4">
          <div id="output-view">
            <span>{this.state.stringValue}</span>
          </div>
          <div id="error">
            <span className="text-danger">{this.state.error ? ("Please Enter Invalid Button") : ("")}</span>
          </div>
          <div className="row">

            <Button kind="power2" value={'X^2'} className="number btn-primary" onClick={this.handleSpecialClick} />
            <Button kind="sqrt" value={'Sqrt'} className="number btn-primary" onClick={this.handleSpecialClick} />
            <Button kind="backspace" value={'<--'} className="number btn-primary" onClick={this.handleSpecialClick} />
            <Button kind="operator" value={'/'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={8} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={7} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={9} className="number btn-info" onClick={this.handleClick} />
            <Button kind="operator" value={'*'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={4} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={5} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={6} className="number btn-info" onClick={this.handleClick} />
            <Button kind="operator" value={'-'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={1} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={2} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={3} className="number btn-info" onClick={this.handleClick} />
            <Button kind="operator" value={'+'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="clear" value={'C'} className="number btn-primary" onClick={this.handleSpecialClick} />
            <Button kind="number" value={0} className="number btn-info" onClick={this.handleClick} />
            <Button kind="operator" value={'.'} className="number btn-primary" onClick={this.handleClick} />
            <Button kind="calculate" value={'='} className="operator btn-danger" onClick={this.handleSpecialClick} />
          </div>
        </div>
        <div className="col-1 col-md-3 col-lg-4"></div>
      </div>
    </React.Fragment>
}