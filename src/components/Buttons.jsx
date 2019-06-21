import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: false
        }
        this.matchedCheck();
        this.counterNumber = this.props.counterNumber
    }

    matchedCheck() {
        if(this.props.value === this.counterNumber){
            this.setState({activated: true});
        } else {
            return;
        }
    }

    getNumber() {
        console.log(this.props.value);
        console.log('Counter num is:', this.counterNumber)
    }

    
    render(){
        return (
            <button className={`grid-button grid-button-val ${this.state.activated ? 'button-activated' : ''}`} onClick={() => {this.matchedCheck(); this.getNumber()}}>
                    <div className="grid-buttons-val">
                    {
                        this.props.value
                    }
                    </div>
            </button>
        )
    }
}