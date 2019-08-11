import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Button from './Component/Button';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringValue: "0"
    }
  }
  handleClick = (ev) => {
    this.setState({
      stringValue: this.state.stringValue !== "0" ?
        this.state.stringValue + ev.target.value
        :
        this.state.stringValue = ev.target.value
    })
  }
  calculateValue = () => { this.setState({ stringValue: eval(this.state.stringValue) }) }
  clearValue = () => { this.setState({ stringValue: "0" }) }
  render = () =>
    <React.Fragment>
      <div className="row">
        <div className="col-1 col-md-3 col-lg-4"></div>
        <div className="col-10 col-md-6 col-lg-4">
          <div id="output-view">
            <span>{this.state.stringValue}</span>
          </div>
          <div className="row">

            <Button value={'X^2'} className="number btn-primary" onClick={this.handleClick} />
            <Button value={'Square'} className="number btn-primary" onClick={this.handleClick} />
            <Button value={'<--'} className="number btn-primary" onClick={this.handleClick} />
            <Button value={'/'} className="operator btn-danger" onClick={this.handleClick} />

            <Button value={8} className="number btn-info" onClick={this.handleClick} />
            <Button value={7} className="number btn-info" onClick={this.handleClick} />
            <Button value={9} className="number btn-info" onClick={this.handleClick} />
            <Button value={'*'} className="operator btn-danger" onClick={this.handleClick} />

            <Button value={4} className="number btn-info" onClick={this.handleClick} />
            <Button value={5} className="number btn-info" onClick={this.handleClick} />
            <Button value={6} className="number btn-info" onClick={this.handleClick} />
            <Button value={'-'} className="operator btn-danger" onClick={this.handleClick} />

            <Button value={1} className="number btn-info" onClick={this.handleClick} />
            <Button value={2} className="number btn-info" onClick={this.handleClick} />
            <Button value={3} className="number btn-info" onClick={this.handleClick} />
            <Button value={'+'} className="operator btn-danger" onClick={this.handleClick} />

            <Button value={'C'} className="number btn-primary" onClick={this.clearValue} />
            <Button value={0} className="number btn-info" onClick={this.handleClick} />
            <Button value={'.'} className="number btn-primary" onClick={this.handleClick} />
            <Button value={'='} className="operator btn-danger" onClick={this.calculateValue} />
          </div>
        </div>
        <div className="col-1 col-md-3 col-lg-4"></div>
      </div>
    </React.Fragment>
}