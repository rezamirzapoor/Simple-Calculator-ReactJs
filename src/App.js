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
      (!this.state.numberClicked && ev.target.dataset.type === "other") ?
        this.setState({ error: true })
        :
        this.setState({
          stringValue: this.state.stringValue + ev.target.value,
          error: false,
          numberClicked: ev.target.dataset.type === "other" ? false : true
        })
      :
      ev.target.dataset.type === "number" ?
        this.setState({ stringValue: ev.target.value, numberClicked: true })
        :
        this.setState({ error: true })
  }

  calculateValue = () => {
    this.state.numberClicked ?
      this.setState({ stringValue: eval(this.state.stringValue) })
      :
      this.setState({ error: true })
  }
  clearValue = () => { this.setState({ stringValue: "0", error: false }) }
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

            <Button kind="other" value={'X^2'} className="number btn-primary" onClick={this.handleClick} />
            <Button kind="other" value={'Square'} className="number btn-primary" onClick={this.handleClick} />
            <Button kind="other" value={'<--'} className="number btn-primary" onClick={this.handleClick} />
            <Button kind="other" value={'/'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={8} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={7} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={9} className="number btn-info" onClick={this.handleClick} />
            <Button kind="other" value={'*'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={4} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={5} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={6} className="number btn-info" onClick={this.handleClick} />
            <Button kind="other" value={'-'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="number" value={1} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={2} className="number btn-info" onClick={this.handleClick} />
            <Button kind="number" value={3} className="number btn-info" onClick={this.handleClick} />
            <Button kind="other" value={'+'} className="operator btn-danger" onClick={this.handleClick} />

            <Button kind="other" value={'C'} className="number btn-primary" onClick={this.clearValue} />
            <Button kind="number" value={0} className="number btn-info" onClick={this.handleClick} />
            <Button kind="other" value={'.'} className="number btn-primary" onClick={this.handleClick} />
            <Button kind="other" value={'='} className="operator btn-danger" onClick={this.calculateValue} />
          </div>
        </div>
        <div className="col-1 col-md-3 col-lg-4"></div>
      </div>
    </React.Fragment>
}