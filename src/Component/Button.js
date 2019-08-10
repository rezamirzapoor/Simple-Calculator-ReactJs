import React, { Component } from 'react';
export default class Button extends Component {
    render = () =>
        <React.Fragment>
            <div className="col-3">
                <input kind={this.props.kind}
                    value={this.props.value}
                    className={"btn btn-block " + this.props.className}
                    onClick={this.props.onClick}
                    type="button"
                />
            </div>
        </React.Fragment>
}