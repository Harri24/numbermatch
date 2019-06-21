import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: false
        }
        this.matchedCheck = this.matchedCheck.bind(this);
    }

    matchedCheck() {
        this.props.checkNumber(this.props.randomObj.Value);
    }

    getNumber() {
        console.log(this.props.randomObj.Value);
        console.log('Counter num is:', this.counterNumber)
    }

    render(){
        return (
            <button className="grid-button">
                <div className={`grid-button-val ${this.props.randomObj.Matched ? 'button-activated' : ''}`} onClick={this.matchedCheck}>
                {
                    this.props.randomObj.Value
                }
                </div>
            </button>
        )
    }
}