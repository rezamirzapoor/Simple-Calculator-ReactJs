import React, { Component } from 'react';
export default class Button extends Component {
    render = () =>
        <React.Fragment>
            <div className="col-3">
                <input
                    value={this.props.value}
                    className={"key btn btn-block " + this.props.className}
                    onClick={this.props.onClick}
                    type="button"
                    data-type={this.props.kind}
                />
            </div>
        </React.Fragment>
}