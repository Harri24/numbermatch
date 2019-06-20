import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: false,
        }
    }

    activate(){
        this.props.callback(this.props.value)
        this.setState({activated: true});

    }

    getNumber() {
        this.currentNumber = this.props.value;
        console.log(this.currentNumber);
    }

    

    render(){
        return (
            <button className={`grid-button grid-button-val ${this.state.activated ? 'button-activated' : ''}`} onClick={() => {this.activate(); this.getNumber()}}>
                    <div className="grid-buttons-val">
                    {
                        this.props.value
                    }
                    </div>
            </button>
        )
    }
}